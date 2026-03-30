import React from "react";
import './card.css'
const Card = ({ title , imageUrl, description, buttonText , onButtonClick }) => {
    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} className="card-image" alt={title} />}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {buttonText && (
                    <button className="card-button" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Card;