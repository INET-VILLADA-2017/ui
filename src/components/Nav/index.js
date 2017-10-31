import React, {Component} from 'react'
import {
    MdAccountCircle
} from 'react-icons/lib/md'
import { connect } from 'react-redux'
import './styles.css'

class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: null
        }
    }

    componentDidMount() {
        this.setState({
            current: this.props.nuerseries[0].id
        })
    }

    onSelectChange = (e) => {
        this.setState({
            current: e.target.value
        })
    }

    render(){
        return (
            <div className={'Nav_wrapper'}>
                <ul className={'Nav_list'}>
                    <li className={'Nav_list__logo'}>
                        <span className={'Nav_list__logo__text'}>{'INET.'}</span>
                    </li>
                    <li className={'Nav_list__box'}>
                        <select onChange={this.onSelectChange}>
                            {this.props.nuerseries.map((e) => (
                                <option key={`nursery-${e.id}`} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </li>
                    <li className={'Nav_list__item'}>
                        <a href={'http://www.google.com'} className={'Nav_list__item__text'}>{'IR AL ADMIN'}</a>
                    </li>
                    <li className={'Nav_list__item'}>
                        <MdAccountCircle className={'Nav_list__item__icon'} />
                    </li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    nuerseries: state.data.nurseries
})

export default connect(mapStateToProps)(Nav)