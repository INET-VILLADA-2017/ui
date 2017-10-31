import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { getNurseries, getParams } from '../../actions/data'
import { withRouter } from 'react-router'
import './styles.css'

import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import Stats from '../../containers/Stats'
import Reports from '../../containers/Reports'
import Config from '../../containers/Config'
import NotFound from '../../containers/NotFound'

class App extends Component {

    componentWillMount() {
        this.props.getNurseries()
        this.props.getParams()
    }

    render() {
        return (
            <div className="App">
                {this.props.location.pathname === '/' && <Redirect from={'/'} exact to={'/stats'}/>}
                <div className="Nav_container">
                    <Route path={'/'} component={Nav}/>
                </div>
                <div className="Main_container">
                    <Route path={'/'} component={Menu}/>
                    <Switch>
                        <Route path={'/stats'} component={Stats}/>
                        <Route path={'/reports'} component={Reports}/>
                        <Route path={'/config'} component={Config}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getNurseries: bindActionCreators(getNurseries, dispatch),
    getParams: bindActionCreators(getParams, dispatch),
})

export default withRouter(connect(() => ({}), mapDispatchToProps)(App))
