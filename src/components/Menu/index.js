import React from 'react'
import { NavLink } from 'react-router-dom'
import Tooltip from 'react-simple-tooltip'
import {
    MdShowChart,
    MdAssignment,
    MdSettings
} from 'react-icons/lib/md'
import './styles.css'

const Menu = () => (
    <div className={'Menu_wrapper'}>
        <ul className={'Menu_list'}>
                <li className={'Menu_list__item'}>
                    <Tooltip
                        content={'Estadisticas'}
                        placement={'right'}
                        radius={2}
                        fontSize={'.8em'}
                        padding={5}
                        border={'#ddd'}
                        color={'#354052'}
                        background={'#fafafa'}
                    >
                    <NavLink className={'Menu_list__item__link'} to={'/stats'} activeClassName={'Menu_list__item__link_active'}><MdShowChart/></NavLink>
                    </Tooltip>
                </li>
                <li className={'Menu_list__item'}>
                    <Tooltip
                        content={'Reportes'}
                        placement={'right'}
                        radius={2}
                        fontSize={'.8em'}
                        padding={5}
                        border={'#ddd'}
                        color={'#354052'}
                        background={'#fafafa'}
                    >
                    <NavLink className={'Menu_list__item__link'} to={'/reports'} activeClassName={'Menu_list__item__link_active'}><MdAssignment/></NavLink>
                    </Tooltip>
                </li>
                <li className={'Menu_list__item'}>
                    <Tooltip
                        content={'Configuracion'}
                        placement={'right'}
                        radius={2}
                        fontSize={'.8em'}
                        padding={5}
                        border={'#ddd'}
                        color={'#354052'}
                        background={'#fafafa'}
                    >
                    <NavLink className={'Menu_list__item__link'} to={'/config'} activeClassName={'Menu_list__item__link_active'}><MdSettings/></NavLink>
                    </Tooltip>
                </li>
        </ul>
    </div>
)

export default Menu