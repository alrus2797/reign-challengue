import React from "react";
import './CardStyles.css';
import {ReactComponent as TimeIcon} from '../../assets/icons/iconmonstr-time-2.svg';
import {ReactComponent as FavoriteEmptyIcon} from '../../assets/icons/fav-empty.svg';
import {ReactComponent as FavoriteFilledIcon} from '../../assets/icons/fav-filled.svg';
import getRelativeTime from "../../helpers/readableTime";

interface CardComponentProps {
  title: string;
  time: string;
  favorite: boolean;
  author: string;
}

export default function CardComponent(props: CardComponentProps) {
  return <div className="card">
    <div className="fav-container">
      {props.favorite ? <FavoriteFilledIcon className="fav-icon" /> : <FavoriteEmptyIcon className="fav-icon" />}
    </div>
    <div className="card-time"><TimeIcon className="time-icon"/> <span className="time-text"> {getRelativeTime(new Date(props.time))} by {props.author} </span></div>
    <div className="card-title">{props.title}</div>
  </div>;
}
