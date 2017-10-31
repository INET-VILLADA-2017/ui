import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import moment from 'moment'
import 'react-table/react-table.css'
import './styles.css'


class Reports extends Component {

    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {Header: 'Zona de riego', accessor: 'x'},
                {Header: 'Temperatura', accessor: 'x'},
                {Header: 'Humedad', accessor: 'x'},
                {Header: 'Volumen de rociado', accessor: 'x'},
                {Header: 'Producto regado 1', accessor: 'x'},
                {Header: 'Producto regado 2', accessor: 'x'},
                {Header: 'Periodo de regado producto 1', accessor: 'x'},
                {Header: 'Periodo de regado producto 2', accessor: 'x'},
                {Header: 'Grado de sombra', accessor: 'x'},
                {Header: 'Status operativo', accessor: 'x'},
            ]
        }
    }

    render() {
        return (
            <div className={'Reports_wrapper'}>
                <ReactTable
                    data={this.props.samples}
                    columns={this.state.columns}
                    defaultPageSize={20}
                    className={'Table -striped -highlight'}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.data.samples
})

export default connect(mapStateToProps)(Reports)
