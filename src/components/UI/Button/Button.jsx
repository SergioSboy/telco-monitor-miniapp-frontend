import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick, children, isDisabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`${styles.button} ${isDisabled ? styles.buttonDisabled : ""}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
};

export default Button;