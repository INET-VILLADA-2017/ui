import React, {Component} from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts'
import { connect } from 'react-redux'
import ParametersMenu from '../../components/ParametersMenu'
import './styles.css'

class Stats extends Component {

    render(){
        return (
            <div className={'Chart_wrapper'}>
                <ParametersMenu />
                <div className={'Chart_box'}>
                    <span className={'Chart_box__label'}>TESTING{this.props.parameter}</span>
                    <LineChart width={800} height={400} data={this.props.samples}>
                        <XAxis dataKey="hora" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="valor" stroke="#F44336" />
                    </LineChart>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.data.samples,
    parameter: state.data.parameter,
})

export default connect(mapStateToProps)(Stats)