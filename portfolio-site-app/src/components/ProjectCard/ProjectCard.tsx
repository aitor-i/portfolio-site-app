import React from "react";
import { Wrapper } from "./ProjectCard.styled";

type CardProps = {
  props: Props;
};
export type Props = {
  name: string;
  link: string;
  linkTitle: string;
  img: string;
  imgAlt: string;
  description: string;
};

const ProjectCard: React.FC<CardProps> = ({ props }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card__header">
          <div className="card__header-title"> {props.name}</div>
          <div className="card__header-link">
            <a href={props.link}>{props.linkTitle}</a>
          </div>
        </div>
        <div className="card__img">
          <img src={props.img} alt={props.imgAlt} />
        </div>
        <div className="card__description">{props.description}</div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
