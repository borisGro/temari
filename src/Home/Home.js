import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';

export default class Home extends React.Component {

 render() {
  return (
      <div className="app-container">
        <div className="app-content">
          <First />
          <Second />
          <Third />
          <Fourth />
          <Fifth />
        </div>
      </div>
  );
}
}