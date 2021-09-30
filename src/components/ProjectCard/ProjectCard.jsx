import React from 'react';
import StyledProjectCard from './ProjectCard.styled';
import codeImage from '../../images/code.jpg';

function ProjectCard() {
  return (
    <StyledProjectCard>
      <section>
        <img src={codeImage} alt="code example" />
        <h4>Projeto 1</h4>
        <div>
          <span>ano</span>
          <span>tipo</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
    </StyledProjectCard>
  );
}

export default ProjectCard;
