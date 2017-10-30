import React from 'react'
import {
    MdShowChart,
} from 'react-icons/lib/md'
import './styles.css'

const ParametersMenu = () => (
    <div className={'ParametersMenu_wrapper'}>
        <span className={'ParametersMenu_list__title'}>{'PARAMETROS'}</span>
        <ul className={'ParametersMenu_list'}>
            <li className={'ParametersMenu_list__item'}>
                <span className={'ParametersMenu_list__item__text'}>{'Zona de riego'}</span>
            </li>
            <li className={'ParametersMenu_list__item'}>
                <span className={'ParametersMenu_list__item__text'}>{'Temperatura'}</span>
            </li>
            <li className={'ParametersMenu_list__item'}>
                <span className={'ParametersMenu_list__item__text'}>{'Humedad'}</span>
            </li>
        </ul>
    </div>
)

export default ParametersMenu