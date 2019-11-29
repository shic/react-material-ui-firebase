import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Stepper from '@material-ui/core/Stepper';

import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';

const styles = (theme) => ({
  list: {
    marginTop: theme.spacing(1)
  },

  firstLevelNesting: {
    paddingLeft: theme.spacing(5.5)
  },

  secondLevelNesting: {
    paddingLeft: theme.spacing(9)
  }
});

class GuideStepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0
    };
  }

  setActiveStep = (step) => {
    this.setState({
      activeStep: step
    });
  };

  render() {
    // Properties
    const { classes } = this.props;

    const { activeStep } = this.state;

    const steps = [
      {
        button: 'Clone the repository',
        content: (
          <StepContent>
            The command <code>git clone</code> is a Git command-line utility which is used to target an existing repository and create a clone, or copy of the target repository. The <code>{'<directory>'}</code> option is the name of a new directory to clone into, you can replace it with your project’s name. The “humanish” part of the source repository is used if no directory is explicitly given (<code>repo</code> for <code>/path/to/repo.git</code> and <code>foo</code> for <code>host.xz:foo/.git</code>).

            <br />
            <br />

            <code>git clone https://github.com/Phoqe/react-material-ui-firebase.git {'<directory>'}</code>
          </StepContent>
        )
      },
      {
        button: 'Install the dependencies',
        content: (
          <StepContent>
            The command <code>cd</code>, also known as <code>chdir</code> (<b>ch</b>ange <b>dir</b>ectory), is a command-line OS shell command used to change the current working directory.

            <br />
            <br />

            <code>cd {'<directory>'}</code>

            <br />
            <br />

            The command <code>yarn install</code> is a Yarn command-line utility which is used to install all dependencies for a project. This is most commonly used when you have just checked out code for a project, or when another developer on the project has added a new dependency that you need to pick up.

            <br />
            <br />

            <code>yarn install</code>
          </StepContent>
        )
      },
      {
        button: 'Run the app',
        content: (
          <StepContent>
            The command <code>yarn start</code> is another Yarn command-line utility which is used to run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

            <br />
            <br />

            <code>yarn start</code>
          </StepContent>
        )
      },
      {
        button: 'Change name and URL',
        content: (
          <StepContent>
            Changing your project’s name can be tedious sometimes as it often involves changing the name of both files and directories along with a ton of hard-coded values.
            With this template, you can change your project’s name by modifying 3 files:

            <List className={classes.list} dense disablePadding>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>

                <ListItemText
                  primary="public"
                />
              </ListItem>

              <ListItem className={classes.firstLevelNesting}>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>

                <ListItemText
                  primary="manifest.json"
                />
              </ListItem>

              <ListItem className={classes.secondLevelNesting}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>

                <ListItemText
                  primary="name"
                />
              </ListItem>

              <ListItem className={classes.secondLevelNesting}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>

                <ListItemText
                  primary="short_name"
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>

                <ListItemText
                  primary=".env"
                />
              </ListItem>

              <ListItem className={classes.firstLevelNesting}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>

                <ListItemText
                  primary="REACT_APP_NAME"
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>

                <ListItemText
                  primary="package.json"
                />
              </ListItem>

              <ListItem className={classes.firstLevelNesting}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>

                <ListItemText
                  primary="name"
                />
              </ListItem>

              <ListItem className={classes.firstLevelNesting}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>

                <ListItemText
                  primary="homepage"
                />
              </ListItem>
            </List>
          </StepContent>
        )
      },
      {
        button: '',
        content: ''
      }
    ];

    return (
      <Stepper activeStep={activeStep} nonLinear orientation="vertical">
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepButton onClick={() => this.setActiveStep(index)}>{step.button}</StepButton>
              {step.content}
            </Step>
          );
        })}
      </Stepper>
    );
  }
}

GuideStepper.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuideStepper);
