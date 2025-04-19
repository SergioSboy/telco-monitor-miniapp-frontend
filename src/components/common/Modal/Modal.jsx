import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import close_icon from "../../../assets/icons/Close.png";
import error_icon from "../../../assets/icons/error.svg";
import ModalPreloader from "../ModalPreloader/ModalPreloader";
import Button from "../../UI/Button/Button";

const Modal = ({
                   onClose,
                   children,
                   header,
                   isLoading,
                   isSuccess,
                   message,
                   error,
                   successBtnInfo,
                   handleBtnSuccess,
               }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span className={styles.header}>{header}</span>
                    <img
                        src={close_icon}
                        alt="Закрыть"
                        className={styles.closeIcon}
                        onClick={onClose}
                    />
                </div>
                {isLoading ? (
                    <ModalPreloader />
                ) : isSuccess === true ? (
                    <div className={styles.successContainer}>
                        <div className={styles.successIcon}>✔</div>
                        <p>{message}</p>
                        {successBtnInfo && (
                            <Button onClick={handleBtnSuccess}>{successBtnInfo}</Button>
                        )}
                    </div>
                ) : isSuccess === false ? (
                    <div className={styles.errorContainer}>
                        <img src={error_icon} alt="Ошибка" className={styles.errorIcon} />
                        <span>{error}</span>
                        <p>Ой! Что-то пошло не так 😢</p>
                    </div>
                ) : (
                    children
                )}
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    header: PropTypes.string.isRequired,
    message: PropTypes.string,
    error: PropTypes.string,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    successBtnInfo: PropTypes.string,
    handleBtnSuccess: PropTypes.func,
};

export default Modal;