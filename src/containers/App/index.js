import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProtectedRoute from '../../components/ProtectedRoute'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { getNurseries, getParams } from '../../actions/data'
import { hideLogout} from '../../actions/display'
import { logout } from '../../actions/auth'
import { withRouter } from 'react-router'
import './styles.css'

import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import Stats from '../../containers/Stats'
import Reports from '../../containers/Reports'
import Config from '../../containers/Config'
import Login from '../../containers/Login'
import NotFound from '../../containers/NotFound'
import Logout from '../../components/Logout'

class App extends Component {

    componentWillMount() {
        this.props.getNurseries()
        this.props.getParams()
    }

    render() {
        return (
            <div className="App">
                {this.props.location.pathname === '/' && <Redirect to={'/stats'}/>}
                {this.props.isAuthenticated && (
                <div className="Nav_container">
                    <Route path={'/'} component={Nav} isAuthenticated={this.props.isAuthenticated}/>
                </div>
                )}
                <div className="Main_container">
                    {this.props.isAuthenticated && (
                    <Route path={'/'} component={Menu} isAuthenticated={this.props.isAuthenticated}/>
                    )}
                    <Switch>
                        <ProtectedRoute path={'/stats'} component={Stats} isAuthenticated={this.props.isAuthenticated}/>
                        <ProtectedRoute path={'/reports'} component={Reports} isAuthenticated={this.props.isAuthenticated}/>
                        <ProtectedRoute path={'/config'} component={Config} isAuthenticated={this.props.isAuthenticated}/>
                        <Route path={'/login'} component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Logout visible={this.props.logoutVisible} close={this.props.hideLogout} logout={this.props.logout}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    logoutVisible: state.display.logout
})

const mapDispatchToProps = (dispatch) => ({
    getNurseries: bindActionCreators(getNurseries, dispatch),
    getParams: bindActionCreators(getParams, dispatch),
    hideLogout: bindActionCreators(hideLogout, dispatch),
    logout: bindActionCreators(logout, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
