import React from "react";

const NewsItem = ({ title, image_url, text }) => {
    return (
        <div>
            <img src={image_url} alt="New Image" />
            <h3>
                <a>{title}</a>
            </h3>
            <p>{text}</p>
        </div>
    );
};

export default NewsItem;