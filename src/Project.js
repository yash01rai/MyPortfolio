import React from "react";
import { useGlobalContext } from "./context";

const Project = ({ image, url, title }) => {
  const { Dark } = useGlobalContext();

  return (
    <main>
      <article className="projects">
        <div className="project-space">
          <img
            src={image}
            alt={title}
            style={{
              height: "200px",
              width: "380px",
              borderRadius: "5px",
              objectFit: "cover",
              opacity: "95%",
            }}
          />
        </div>
        <a href={url}>
          <div className={`${Dark ? "footer-dark" : "project-footer"}`}>
            {title}
          </div>
        </a>
      </article>
    </main>
  );
};

export default Project;
