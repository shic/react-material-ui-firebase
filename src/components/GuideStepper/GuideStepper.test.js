import React from 'react';

import ReactDOM from 'react-dom';

import GuideStepper from './GuideStepper';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    (
      <GuideStepper />
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
