import React from "react";
import preloader from "../../../assets/icons/preloader.svg";

const ModalPreloader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img alt={"preloader"} src={preloader} width="100px" height="100px" />
        </div>
    );
};

export default ModalPreloader;