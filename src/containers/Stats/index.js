import React, {Component} from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts'
import { connect } from 'react-redux'
import moment from 'moment'
import ParametersMenu from '../../components/ParametersMenu'
import './styles.css'

class Stats extends Component {

    constructor(props){
        super(props)
        this.state = {
            parameter: 'Temperatura',
            color: '#F44336'
        }
    }

    data = () => (
        this.props.samples.filter((e) => e.param.name === this.state.parameter).slice(-10).map(
            (e) => ({date: moment(e.date).format('D-M-YYYY, h:mm:ss a'), value: parseFloat(e.value)})
        )
    )

    changeParameter = (param, color) => {
        this.setState({
            parameter: param,
            color: color
        })
    }

    menuParameters = () => (
        this.props.parameters.filter((p) => (
                p.name === 'Humedad' ||
                p.name === 'Temperatura' ||
                p.name === 'Volumen de rociado' ||
                p.name === 'Grado de sombra'
            )
        )
    )


    render(){
        return (
            <div className={'Chart_wrapper'}>
                <ParametersMenu
                    changeParameter={this.changeParameter}
                    params={this.menuParameters()}
                    current={this.state.parameter}/>
                <div className={'Chart_box'}>
                    <span className={'Chart_box__label'}>{this.state.parameter}</span>
                    <LineChart width={800} height={400} data={this.data()}>
                        <XAxis dataKey="date" hide/>
                        <YAxis hide />
                        <Tooltip/>
                        <CartesianGrid stroke="#BDBDBD" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="value" stroke={this.state.color} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.data.samples,
    parameters: state.data.parameters
})

export default connect(mapStateToProps)(Stats)