import React, { Component, Fragment } from 'react'
import compose from '@kyleholzinger/react-compose'

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

const ComposedComponent = compose([
  { component: ComponentA, props: { testPropA: 1 } },
  { component: ComponentB, props: { testPropB: 2 } },
  { component: ComponentC, props: { testPropC: 3 } }
])

class App extends Component {
  render() {
    return (
      <ComposedComponent>
        {(...args) => (
          <div>
            The values passed were: <Dump allArgs={args} />
          </div>
        )}
      </ComposedComponent>
    )
  }
}

export default App
