import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
const ErrorModal = ({ error, onClose }) => {
    return (
        <Modal
            header={""}
            isSuccess={false}
            onClose={onClose}
            error={error}
        ></Modal>
    );
};

ErrorModal.propTypes = {
    error: PropTypes.string,
    onClose: PropTypes.func,
};

export default ErrorModal;