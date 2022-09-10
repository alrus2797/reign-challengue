import React from "react";
import './CardStyles.css';

interface CardComponentProps {
  title: string;
  time: string;
  favorite: boolean;
}

export default function CardComponent(props: CardComponentProps) {
  return <div className="card">
    <span>{props.title}</span>
  </div>;
}
