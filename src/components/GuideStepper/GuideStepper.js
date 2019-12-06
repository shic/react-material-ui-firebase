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
            The command <code>git clone</code> is a Git command-line utility which is used to target an existing repository and create a clone, or copy of the target repository.
            The <code>{'<directory>'}</code> option is the name of a new directory to clone into, replace it with your project’s name.
            The “humanish” part of the source repository is used if no directory is explicitly given (<code>repo</code> for <code>/path/to/repo.git</code> and <code>foo</code> for <code>host.xz:foo/.git</code>).

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
            The <code>{'<directory>'}</code> option is the name of the new working directory, replace it with your project’s name.

            <br />
            <br />

            <code>cd {'<directory>'}</code>

            <br />
            <br />

            The command <code>yarn install</code> is a Yarn command-line utility which is used to install all dependencies for a project.
            This is most commonly used when you have just checked out code for a project, or when another developer on the project has added a new dependency that you need to pick up.

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
            The command <code>yarn start</code> is another Yarn command-line utility which is used to run the app in development mode.
            Open http://localhost:3000 to view it in the browser.
            The page will automatically reload if you make changes to the code.
            You will see the build errors and lint warnings in the console.

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
            With this template, you can change your project’s name by modifying 3 files.

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
        button: 'Create a Firebase project',
        content: (
          <StepContent>
            <ol>
              <li>
                In the Firebase console, click <b>Add project</b>, then select or enter a <b>Project name</b>.
                If you have an existing Google Cloud Platform (GCP) project, you can select the project from the dropdown menu to add Firebase resources to that project.
              </li>

              <li>
                Click <b>Continue</b>.
              </li>

              <li>
                Click <b>Create project</b> (or <b>Add Firebase</b>, if you’re using an existing GCP project).
              </li>
            </ol>
          </StepContent>
        )
      },
      {
        button: 'Create a Cloud Firestore database',
        content: (
          <StepContent>
            <ol>
              <li>
                From the console’s navigation pane, select <b>Database</b>, then click <b>Create database</b> for Cloud Firestore.
              </li>

              <li>
                Select a starting mode for your Cloud Firestore Security Rules. <b>Test mode</b> is good for getting started with the mobile and web client libraries, but allows anyone to read and overwrite your data.
                After testing, <b>make sure to review the Secure your data section</b>. <b>Locked mode</b> denies all reads and writes from mobile and web clients.
                Your authenticated application servers (C#, Go, Java, Node.js, PHP, Python, or Ruby) can still access your database.
                To get started with the C#, Go, Java, Node.js, PHP, Python, or Ruby server client library, select locked mode.
              </li>

              <li>
                Select a location for your database.
              </li>

              <li>
                Click <b>Done</b>.
              </li>
            </ol>
          </StepContent>
        )
      },
      {
        button: 'Deploy Cloud Firestore Security Rules',
        content: (
          <StepContent>
            <ol>
              <li>
                Open the <b>Rules</b> tab in the Cloud Firestore section of the Firebase console.
              </li>

              <li>
                Copy the contents of the <code>firestore.rules</code> file in your project and paste it into the online editor.
              </li>

              <li>
                Click <b>Publish</b>.
              </li>
            </ol>
          </StepContent>
        )
      },
      {
        button: 'Create a default Storage bucket',
        content: (
          <StepContent>
            <ol>
              <li>
                From the navigation pane of the Firebase console, select <b>Storage</b>, then click <b>Get started</b>.
              </li>

              <li>
                Review the messaging about securing your Storage data using security rules.
                During development, consider setting up your rules for public access.
              </li>

              <li>
                Select a location for your default Storage bucket.
              </li>

              <li>
                Click <b>Done</b>.
              </li>
            </ol>
          </StepContent>
        )
      },
      {
        button: 'Deploy Storage Security Rules',
        content: (
          <StepContent>
            <ol>
              <li>
                Open the <b>Rules</b> tab in the Storage section of the Firebase console.
              </li>

              <li>
                Copy the contents of the <code>storage.rules</code> file in your project and paste it into the online editor.
              </li>

              <li>
                Click <b>Publish</b>.
              </li>
            </ol>
          </StepContent>
        )
      },
      {
        button: 'Register your app with Firebase',
        content: (
          <StepContent>
            <ol>
              <li>
                In the center of the Firebase console’s project overview page, click the <b>Web</b> icon to launch the setup workflow.
                If you’ve already added an app to your Firebase project, click <b>Add app</b> to display the platform options.
              </li>

              <li>
                Enter your app’s nickname.
                This nickname is an internal, convenience identifier and is only visible to you in the Firebase console.
              </li>

              <li>
                Click <b>Register app</b>.
              </li>
            </ol>
          </StepContent>
        )
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
