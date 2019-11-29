import React, { Component } from 'react';

import Stepper from '@material-ui/core/Stepper';

import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';

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
    const { activeStep } = this.state;

    const steps = [
      {
        button: 'Clone the repository',
        content: ''
      },
      {
        button: 'Install the dependencies',
        content: ''
      },
      {
        button: 'Create a Firebase project',
        content: ''
      },
      {
        button: 'Explore your Firebase project',
        content: ''
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
              <StepContent>{step.content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    );
  }
}

export default GuideStepper;
