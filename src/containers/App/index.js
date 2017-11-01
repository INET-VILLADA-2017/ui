import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProtectedRoute from '../../components/ProtectedRoute'
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
import Login from '../../containers/Login'
import NotFound from '../../containers/NotFound'

class App extends Component {

    componentWillMount() {
        this.props.getNurseries()
        this.props.getParams()
    }

    render() {
        return (
            <div className="App">
                {this.props.location.pathname === '/' && <Redirect to={'/stats'}/>}
                <div className="Nav_container">
                    <Route path={'/'} component={Nav} isAuthenticated={this.props.isAuthenticated}/>
                </div>
                <div className="Main_container">
                    <Route path={'/'} component={Menu} isAuthenticated={this.props.isAuthenticated}/>
                    <Switch>
                        <ProtectedRoute path={'/stats'} component={Stats} isAuthenticated={this.props.isAuthenticated}/>
                        <ProtectedRoute path={'/reports'} component={Reports} isAuthenticated={this.props.isAuthenticated}/>
                        <ProtectedRoute path={'/config'} component={Config} isAuthenticated={this.props.isAuthenticated}/>
                        <Route path={'/login'} component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
    getNurseries: bindActionCreators(getNurseries, dispatch),
    getParams: bindActionCreators(getParams, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
