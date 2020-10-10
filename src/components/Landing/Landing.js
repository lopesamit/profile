import React, { Component } from 'react';
import logo from './../../logo.svg';
import '../../App.scss';
import Home from '../Home/Home'
import Feedback from '../Feedback/Feedback'
import Making from '../Making/Making'
import Profile from '../Profile/Profile'
import ParticleEffectButton from 'react-particle-effect-button'
import { Link, Redirect } from 'react-router-dom'

const style = {
  color : '#e28383',
  height: '100px',
  width: '100px'
}
const component = {
  Home: 'Home',
  Profile: 'Profile',
  Making: 'Making',
  Feedback: 'Feedback'
}

class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHiddenHome: false,
      isHiddenProfile: false,
      isHiddenMaking: false,
      isHiddenFeedback: false,
      components: ['Home', 'Profile', 'Making', 'Feedback'],
      component: '',
      isComplete: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }

  handleClick(component){
    this.setState((previousState, currentProps) => {
      if(component === 'Home'){
        return {isHiddenHome: !previousState.isHiddenHome, component: component};
      } else if (component === 'Profile')
        return {isHiddenProfile: !previousState.isHiddenProfile, component: component};
      else if (component === 'Making')
        return {isHiddenMaking: !previousState.isHiddenMaking, component: component};
      else if (component === 'Feedback')
        return {isHiddenFeedback: !previousState.isHiddenFeedback, component: component};
    });
  }

  handleComplete(){
    this.setState({ isComplete: true})
  }

  render() {
    var divider = 0;
    if (this.state.isComplete) {
      return <Redirect 
          to={{
              pathname: `/${this.state.component}`,
              state: this.state
          }}
      />
  }
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="h-auto w-auto">
          <div className="">

            {this.state.components.map((item) => {
              var state = this.state.isHiddenHome
              if(item === 'Profile')
                state = this.state.isHiddenProfile
              if(item === 'Making')
                state = this.state.isHiddenMaking
              if(item === 'Feedback')
                state = this.state.isHiddenFeedback
              divider++;
              return (
                <ParticleEffectButton
                  color='#121019'
                  hidden={state}
                  type={'triangle'}
                  key={item}
                  onComplete={this.handleComplete}
                >
                  <div className={`ml-1 mr-1 mb-1 ${item.toLowerCase()}`} style={style} onClick={() => this.handleClick(item)}>
                    {item}
                  </div>
                </ParticleEffectButton>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
