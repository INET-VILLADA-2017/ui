import React from 'react'
import {
    MdAccountCircle
} from 'react-icons/lib/md'
import './styles.css'

const Nav = () => (
    <div className={'Nav_wrapper'}>
        <ul className={'Nav_list'}>
            <li className={'Nav_list__logo'}>
                <span className={'Nav_list__logo__text'}>{'INET.'}</span>
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

export default Nav