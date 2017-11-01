import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { login } from '../../actions/auth'
import './styles.css'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    submit = (e) => {
        e.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.props.isAuthenticated) {
            return (
                <Redirect to={from}/>
            )
        }
        return (
            <div className={'Login_wrapper'}>
                <div className={'Login_box'}>
                    <form onSubmit={this.submit} className={'Login_box__form'}>
                        <span className={'Login_box__form__label'}>{'Usuario'}</span>
                        <input
                            value={this.state.username}
                            onChange={(e) => this.setState({username: e.target.value})}
                            className={'Login_box__form__input'}
                            type={'text'} />

                        <span className={'Login_box__form__label'}>{'Contraseña'}</span>
                        <input
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                            className={'Login_box__form__input'}
                            type={'password'} />

                        <input className={'Login_box__form__button'} type={'submit'} value={'Ingresar'} />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
