import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  
  return (
    <div className="top-nav-bar">
      <span 
      onClick={props.getPhotosByNavBar}
      className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList topics={props.topics} getPhotosByTopics={props.getPhotosByTopics}/>
      <FavBadge isFavPhotoExist={props.isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;