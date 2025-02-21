import React from "react";
import { Link } from "react-router-dom";

export const Agenda = ({ leftContent, rightContent }) => {
    return (
        <div className="agenda-container">
            <div className="agenda">
                <div className="agenda-pages">
                    <div className="agenda-right-page">{rightContent}</div>
                    <div className="agenda-left-page">{leftContent}</div>
                </div>
                <div className="agenda-split"></div>
                <Link to="/">
                    <div className="agenda-marker"></div>
                </Link>
            </div>
        </div>
    );
};