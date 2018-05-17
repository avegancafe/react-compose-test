import React, { Component, Fragment } from 'react'

import './App.css'
import Dump from './Dump'

class ComponentA extends Component {
  render() {
    return <Fragment>{this.props.children({ someValue: 1 })}</Fragment>
  }
}

class ComponentB extends Component {
  render() {
    return <Fragment>{this.props.children({ someOtherValue: 2 })}</Fragment>
  }
}

class ComponentC extends Component {
  render() {
    return <Fragment>{this.props.children({ someThirdValue: 3 })}</Fragment>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ComponentA>
          {val => (
            <ComponentB>
              {val2 => (
                <ComponentC>
                  {val3 => (
                    <div>
                      The values passed were:{' '}
                      <Dump
                        ComponentAVal={val}
                        ComponentBVal={val2}
                        ComponentCVal={val3}
                      />
                    </div>
                  )}
                </ComponentC>
              )}
            </ComponentB>
          )}
        </ComponentA>
      </div>
    )
  }
}

export default App
