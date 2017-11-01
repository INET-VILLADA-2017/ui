import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import moment from 'moment'
import 'react-table/react-table.css'
import ParametersMenu from '../../components/ParametersMenu'
import './styles.css'


class Reports extends Component {

    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {Header: 'Hora', width: 200, id: 'h', accessor: d => moment(d.date).format('D-M-YYYY, h:mm:ss a')},
                {Header: 'Valor', id: 't', accessor: d => parseFloat(d.value)},
                {Header: 'Unidad fisica', id: 'z', accessor: d => d.unit},
                {Header: 'Estado transductor', id: 'v', accessor: d => d.state_transducer},
                {Header: 'Duracion', id: 'p1', accessor: d => d.duration},
                {Header: 'Estado transmision', id: 'p2', accessor: d => d.state_transmission},
            ],
            parameter: 'Temperatura',
            color: '#F44336'
        }
    }

    data = () => this.props.samples.filter((e) => e.param.name === this.state.parameter)

    changeParameter = (param, color) => {
        this.setState({
            parameter: param,
            color: color
        })
    }

    render() {
        return (
            <div className={'Reports_wrapper'}>
                <ParametersMenu
                    changeParameter={this.changeParameter}
                    params={this.props.parameters}
                    current={this.state.parameter}
                />
                <ReactTable
                    data={this.data()}
                    columns={this.state.columns}
                    defaultPageSize={20}
                    noDataText={'No hay muestras'}
                    className={'Table -striped -highlight'}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.data.samples,
    parameters: state.data.parameters
})

export default connect(mapStateToProps)(Reports)
