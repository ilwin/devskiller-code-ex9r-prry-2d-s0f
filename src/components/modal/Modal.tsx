import React, { FC } from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from 'clsx';

import './modal.scss';
import {toggleModal} from 'store/settings/settingsSlice';

import {IModal, IRootState} from "types";

const Modal: FC<IModal> = ({ content, isVisible, className }) => {
    const {shouldShowModal} = useSelector((state: IRootState) => state.settings);

    const dispatch =  useDispatch();
    const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(toggleModal());
    }
    return (
        <div className={cn('modal', className, {isVisible: shouldShowModal})} onClick={(event) => handleCloseModal(event)}>
            <div className="modal-content">
                <div className='close' onClick={handleCloseModal}>&#10006;</div>
                {content}
            </div>
        </div>
    )
};

export default Modal;
