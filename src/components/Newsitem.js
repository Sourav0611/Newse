import React from "react";

const Newsitems = ({ title, description, imageUrl, newsurl }) => {
  return (
    <div className="card">
      <img
        src={imageUrl || "https://via.placeholder.com/400x200.png?text=No+Image"} // Default image URL
        className="card-img-top"
        alt="news"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitems;
