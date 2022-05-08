import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, codeLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Website
        </a>
        &nbsp;
        <a
          href={codeLink ? codeLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default Card
