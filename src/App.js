import Music from './containers/Music/Music';
import SoundModule from './components/SoundModule/SoundModule';
import Dog from './components/Dog/Dog';
import DogSpawner from './containers/DogSpawner/DogSpawner';
import Gradient from './components/Gradient/Gradient';
import IntroModal from './components/IntroModal/IntroModal';
import PageVisibility from 'react-page-visibility';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions.js'

/*
Import linear gradients API
Use infiniteGradients.getLinearGradient

*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  }

  handleVisibilityChange = isVisible => {
    this.props.visibilityChange(isVisible)
  }

  render() {

    return (
      <PageVisibility onChange={this.handleVisibilityChange}>
      <div>
      <div className="backgroundDiv">
      <IntroModal />
      <Gradient>
      <DogSpawner />
      </Gradient>
      <Music />
      </div>
      {/*
      <SoundModule />
      */}
      </div>
      </PageVisibility>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    visibilityChange: (value) => dispatch({type:actionTypes.WINDOW_VISIBILITY_CHANGE, value: value})
  }
}

export default connect(null,mapDispatchToProps)(App);
