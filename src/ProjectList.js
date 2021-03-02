import React from "react";
import Project from "./Project";
import { links } from "./data";
import { useGlobalContext } from "./context";

const ProjectList = () => {
  const { Dark } = useGlobalContext();

  return (
    <section className="section">
      <h2 className={`${Dark ? "dark-title" : "section-title"}`}>Projects</h2>
      <div className="project-center">
        {links.map((item) => {
          return <Project key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
