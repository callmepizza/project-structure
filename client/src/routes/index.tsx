import * as React from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Authorization } from 'pages/index'

export const Routes = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Authorization} />
        </Switch>
      </>
    </Router>
  )
}
