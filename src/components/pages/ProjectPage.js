import React from "react";
import projectlist from "../../projectList";

function ProjectPage() {
  return (
    <div>
      <h1 className="text-center m-3">Projects</h1>
      
      <div className="row border-top border-dark justify-content-around m-3 content-wrap">
        {
          projectlist.map(project => {
            return (
              <div className="col-12 col-lg-3 m-3 border border-3 border-dark bg">
                <h2 className="text-center">{project.name}</h2>
                <img className="screenshot" src={project.pic} alt={project.alt}></img>
                <p>link: <a className="link" href={project.link} target="_blank">{project.link}</a></p>
                <p>repo: <a className="link" href={project.github} target="_blank">{project.github}</a></p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProjectPage;