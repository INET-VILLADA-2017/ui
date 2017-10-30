import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import './styles.css'

import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import Stats from '../../containers/Stats'

class App extends Component {

    componentWillMount() {
    }

    render() {
        return (
            <div className="App">
                <Redirect from={'/'} exact to={'/stats'}/>
                <div className="Nav_container">
                    <Route path={'/'} component={Nav}/>
                </div>
                <div className="Main_container">
                    <Route path={'/'} component={Menu}/>
                    <Switch>
                        <Route path={'/stats'} component={Stats}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(() => ({}), mapDispatchToProps)(App))
