import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, isAuthenticated }) => (
    <Route render={ props => (
        isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

/*
class ProtectedRoute extends Component {

    componentWillMount(){
        console.log(this.props)
    }

    render() {
        const Comp = this.props.component
        return(
            <Route render={ props => (
                this.props.isAuthenticated ? (
                    <Comp {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                )
            )}/>
        )
    }
}
*/

export default ProtectedRoute