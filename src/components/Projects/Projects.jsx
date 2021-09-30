import React from 'react';
import StyledProjects from './Projects.styled';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  return (
    <StyledProjects>
      <main>
        <h3>Projetos</h3>
        <ProjectCard />
      </main>
    </StyledProjects>
  );
}

export default Projects;
