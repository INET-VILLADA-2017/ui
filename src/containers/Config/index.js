import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-table/react-table.css'
import './styles.css'


class Reports extends Component {

    constructor(props) {
        super(props)
        this.state = {
            volume: '',
            shadow: '',
            period1: '',
            period2: ''
        }
    }

    submit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className={'Config_wrapper'}>
                <div className={'Config_box'}>
                    <form onSubmit={this.submit} className={'Config_box__form'}>
                        <span className={'Config_box__form__label'}>{'Volumen de rociado'}</span>
                        <input
                            value={this.state.volume}
                            onChange={(e) => this.setState({volume: e.target.value})}
                            className={'Config_box__form__input'}
                            type={'text'} />

                        <span className={'Config_box__form__label'}>{'Grado de sombra'}</span>
                        <input
                            value={this.state.shadow}
                            onChange={(e) => this.setState({shadow: e.target.value})}
                            className={'Config_box__form__input'}
                            type={'text'} />

                        <span className={'Config_box__form__label'}>{'Periodo de regado 1'}</span>
                        <input
                            value={this.state.period1}
                            onChange={(e) => this.setState({period1: e.target.value})}
                            className={'Config_box__form__input'}
                            type={'text'} />

                        <span className={'Config_box__form__label'}>{'Periodo de regado 2'}</span>
                        <input
                            value={this.state.period2}
                            onChange={(e) => this.setState({period2: e.target.value})}
                            className={'Config_box__form__input'}
                            type={'text'} />

                        <input className={'Config_box__form__button'} type={'submit'} value={'Guardar'} />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.data.samples
})

export default connect(mapStateToProps)(Reports)
