import React from "react";
import './CardStyles.css';
import {ReactComponent as TimeIcon} from '../../assets/icons/iconmonstr-time-2.svg';
import {ReactComponent as FavoriteEmptyIcon} from '../../assets/icons/fav-empty.svg';
import {ReactComponent as FavoriteFilledIcon} from '../../assets/icons/fav-filled.svg';
import getRelativeTime from "../../helpers/readableTime";
import { click } from "@testing-library/user-event/dist/click";

interface CardComponentProps {
  title: string;
  time: string;
  favorite: boolean;
  author: string;
  url: string;
}

export default function CardComponent(props: CardComponentProps) {

  function saveFavorite(e: React.MouseEvent) {
    e.stopPropagation();
    console.log("save favorite");
    // Save News to local storage    
    const FavNews = JSON.parse(localStorage.getItem('FavNews') || '[]');
    FavNews.push(props);
    localStorage.setItem('FavNews', JSON.stringify(FavNews));
  }

  function openNew(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    window.open(props.url, "_blank");
  }

  return <div className="card" onClick={openNew}>
    <div className="fav-container">
      {props.favorite ? <FavoriteFilledIcon className="fav-icon" /> : <FavoriteEmptyIcon onClick={saveFavorite} className="fav-icon" />}
    </div>
    <div className="card-time"><TimeIcon className="time-icon"/> <span className="time-text"> {getRelativeTime(new Date(props.time))} by {props.author} </span></div>
    <div className="card-title">{props.title}</div>
  </div>;
}
