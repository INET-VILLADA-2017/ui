import React from 'react'
import {
    MdShowChart,
} from 'react-icons/lib/md'
import './styles.css'

const ParametersMenu = ({changeParameter, params, current}) => (
    <div className={'ParametersMenu_wrapper'}>
        <span className={'ParametersMenu_list__title'}>{'PARAMETROS'}</span>
        <ul className={'ParametersMenu_list'}>
            {params.map((p) =>
                <li onClick={() => changeParameter(p.name, p.color)} className={
                    current === p.name ? 'ParametersMenu_list__item active' : 'ParametersMenu_list__item'
                }>
                    <span className={'ParametersMenu_list__item__text'}>{p.name}</span>
                </li>
            )}
        </ul>
    </div>
)

export default ParametersMenu