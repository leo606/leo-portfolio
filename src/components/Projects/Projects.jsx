import React from 'react';
import StyledProjects from './Projects.styled';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectsData from '../../data/projects.json';

function Projects() {
  return (
    <StyledProjects id="projects">
      <h3>Projetos</h3>
      <section>
        {
            ProjectsData.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))
          }
      </section>
    </StyledProjects>
  );
}

export default Projects;
