import React from "react";
export const Agenda = ({leftContent, rightContent}) => {

    return (
        <div className="agenda-container">
            <div className="agenda">
                <div className="agenda-pages">
                    <div className="agenda-right-page">{rightContent}</div>
                    <div className="agenda-left-page">{leftContent}</div>
                </div>
                <div className="agenda-split"></div>
                <div className="agenda-marker"></div>
                </div>
        </div>
    );
}; 