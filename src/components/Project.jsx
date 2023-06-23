import React from "react";

export const Project = ({ project }) => {
  return (
    <div>
      <div className="projectContent">
        <h2
          id={project.name.replace(" ", "-").toLowerCase()}
          style={{ color: theme.tertiary }}
        >
          {project.name}
        </h2>
        <img src={project.image } alt={name} />
        <div className="project--showcaseBtn">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
            aria-labelledby={`${project.name.replace(" ", "-").toLowerCase()} ${project.name
              .replace(" ", "-")
              .toLowerCase()}-demo`}
          >
            <FaPlay
              id={`${project.name.replace(" ", "-").toLowerCase()}-demo`}
              className={classes.icon}
              aria-label="Demo"
            />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
            aria-labelledby={`${project.name.replace(" ", "-").toLowerCase()} ${project.name
              .replace(" ", "-")
              .toLowerCase()}-code`}
          >
            <FaCode
              id={`${project.name.replace(" ", "-").toLowerCase()}-code`}
              className={classes.icon}
              aria-label="Code"
            />
          </a>
        </div>
      </div>
      <p
        className="project--desc"
        style={{
          background: theme.secondary,
         
        }}
      >
        {desc}
      </p>
      <div
        className="project--lang"
        style={{
          background: theme.secondary,
          color: theme.tertiary,
        }}
      >
        {project.tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
