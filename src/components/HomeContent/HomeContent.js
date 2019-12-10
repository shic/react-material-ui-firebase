import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import HomeIcon from '@material-ui/icons/Home';

import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

import EmptyState from '../EmptyState';
import GuideStepper from '../GuideStepper';

const styles = (theme) => ({
  buttonIcon: {
    marginRight: theme.spacing(1)
  },

  cardContent: {
    paddingBottom: theme.spacing(0)
  }
});

class HomeContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { user } = this.props;

    if (user) {
      return (
        <EmptyState
          icon={<HomeIcon />}
          title="Home"
        />
      );
    }

    return (
      <Grid container justify="center">
        <Grid item xs={7}>
          <Card>
            <CardContent classes={{ root: classes.cardContent }}>
              <Box color="text.secondary">
                Portions of this page are modifications based on work created and shared by Google and used according to terms described in the Creative Commons 4.0 Attribution License.
              </Box>
            </CardContent>

            <GuideStepper />
          </Card>
        </Grid>
      </Grid>
    );

    return (
      <EmptyState
        title={process.env.REACT_APP_TITLE}
        description="The three musketeers, all in one pack in the form of a boilerplate app"
        button={
          <Fab color="secondary" href="https://github.com/Phoqe/react-material-ui-firebase" rel="noopener noreferrer" target="_blank" variant="extended">
            <GitHubCircleIcon className={classes.buttonIcon} />
            GitHub
          </Fab>
        }
      />
    );
  }
}

HomeContent.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  user: PropTypes.object
};

export default withStyles(styles)(HomeContent);
