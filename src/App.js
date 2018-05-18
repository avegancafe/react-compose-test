import React, { Component, Fragment } from 'react'
import compose from '@kyleholzinger/react-compose'

import './App.css'
import Dump from './Dump'

class MousePosition extends Component {
  render() {
    return <Fragment>{this.props.children({ x: 300, y: 427 })}</Fragment>
  }
}

class Subscription extends Component {
  render() {
    return <Fragment>{this.props.children({ data: ["note 1", "note 2"] })}</Fragment>
  }
}

class Validate extends Component {
  render() {
    return <Fragment>{this.props.children({ predicate: x => (x < 10) })}</Fragment>
  }
}

const ComposedComponent = compose([
  { component: MousePosition, props: { relative: true } },
  { component: Subscription, props: { url: '/api/notes' } },
  { component: Validate  }
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
