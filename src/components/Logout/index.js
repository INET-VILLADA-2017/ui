import React from 'react'
import Modal from 'react-modal'
import './styles.css'

const Logout = ({visible, close, logout}) => (
    <Modal isOpen={visible}
           onRequestClose={close}
           className={'Logout_modal'}
           overlayClassName={'Logout_modal__overlay'}>
        <span className={'Logout_modal__title'}>{'Esta seguro que desea terminar la sesion?'}</span>

        <div className={'Logout_modal__button_group'}>
            <input onClick={logout} className={'Logout_modal__button Button__accept'} type={'submit'} value={'OK'} />
            <input onClick={close} className={'Logout_modal__button Button__cancel'} type={'submit'} value={'Cancelar'} />
        </div>

    </Modal>
)

export default Logout