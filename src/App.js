import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";

//Material UI
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

//Components
import DesignDrawer from 'components/design/DesignDrawer';
import PreviewContactApp from 'components/contactApp/preview/PreviewContactApp'

const App = () => {

    function dashboard(){
      return (
        <Route exact path="/">
        <Paper style={{width:'50%',padding:5,margin:"auto"}}>
          <p>Dashboard for designs</p>
          <p>The following designs are built on the Material UI design system</p>
          <a target="new_tab" href="https://material-ui.com/getting-started/usage/">Material UI</a>
        </Paper>
      </Route>
    )
    }

    return (
          <div data-name="app" className="app">
                <DesignDrawer />
                <Switch>
                  <Route exact path="/index.html">
                    {dashboard()}
                  </Route>
                  <Route exact path="/">
                    {dashboard()}
                  </Route>
                  <Route path="/contacts/preview/:element" component={PreviewContactApp} />
                  <Route path="/"><p>No page defined</p></Route>
                </Switch>
          </div>
    )
}

export default withRouter(App);
