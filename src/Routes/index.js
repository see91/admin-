import React,{Component} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import HomeComponent from '../Views/Home'

class Routes extends Component{
  render(h) {
    return (
      <div>
        <Switch>
          <Route path='/' component={HomeComponent}/>
        </Switch>
      </div>
    )
  }
}
export default withRouter(Routes)