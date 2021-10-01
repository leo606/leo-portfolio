import React from 'react';
import { shape, number, string } from 'prop-types';
import StyledProjectCard from './ProjectCard.styled';

function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <img src={project.thumb} alt={project.name} />
      <h4>{project.name}</h4>
      <div>
        <span>{project.year}</span>
        <span>{project.type}</span>
      </div>
      <div>
        <a href="https://www.google.com/">projeto</a>
        <a href="https://www.google.com/">repositorio</a>
      </div>
      <p>{project.description}</p>
    </StyledProjectCard>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  project: shape({
    id: number,
    name: string,
    year: string,
    type: string,
    description: string,
    thumb: string,
  }).isRequired,
};
