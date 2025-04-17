import React from "react";
import preloader from "./../../../assets/icons/preloader.svg";

const Preloader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "75vh",
            }}
        >
            <img alt={"preloader"} src={preloader} width="200px" height="200px" />
        </div>
    );
};

export default Preloader;