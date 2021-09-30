/* eslint-disable react/prop-types */
import React from 'react';
import StyledProjectCard from './ProjectCard.styled';
import codeImage from '../../images/code.jpg';

function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <img src={codeImage} alt="code example" />
      <h4>{project.name}</h4>
      <div>
        <span>{project.year}</span>
        <span>{project.type}</span>
      </div>
      <p>{project.description}</p>
    </StyledProjectCard>
  );
}

export default ProjectCard;
