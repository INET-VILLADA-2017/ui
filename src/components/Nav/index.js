import React, {Component} from 'react'
import {
    MdAccountCircle
} from 'react-icons/lib/md'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrent } from '../../actions/data'
import { showLogout } from '../../actions/display'
import { ADMIN_URL } from '../../utils/config'
import './styles.css'

class Nav extends Component {

    onSelectChange = (e) => this.props.setCurrent(e.target.value)

    componentWillReceiveProps(props) {
        if (props.nurseries) {
            this.props.setCurrent(props.nurseries[0].id)
        }
    }

    render(){
        return (
            <div className={'Nav_wrapper'}>
                <ul className={'Nav_list'}>
                    <li className={'Nav_list__logo'}>
                        <span className={'Nav_list__logo__text'}>{'INET.'}</span>
                    </li>
                    <li className={'Nav_list__box'}>
                        { this.props.nurseries && (
                        <select onChange={this.onSelectChange}>
                            {this.props.nurseries.map((e) => (
                                <option key={`nursery-${e.id}`} value={e.id}>{e.business_name}</option>
                            ))}
                        </select>
                        )}
                    </li>
                    {this.props.admin && (
                    <li className={'Nav_list__item'}>
                        <a href={ADMIN_URL} className={'Nav_list__item__text'}>{'IR AL ADMIN'}</a>
                    </li>
                    )}
                    <li onClick={this.props.showLogout} className={'Nav_list__item'}>
                        <MdAccountCircle className={'Nav_list__item__icon'} />
                    </li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    nurseries: state.data.nurseries,
    isAuthenticated: state.auth.isAuthenticated,
    supervisor: state.auth.supervisor,
    admin: state.auth.admin,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrent: bindActionCreators(setCurrent, dispatch),
    showLogout: bindActionCreators(showLogout, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)