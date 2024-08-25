import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, isFavPhotoExist, getPhotosByTopics, getPhotosByNavBar, setTheme, theme}) => {
  
  return (
    <div className={`top-nav-bar ${theme}`}>
      <span 
      onClick={getPhotosByNavBar}
      className="top-nav-bar__logo ">
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopics={getPhotosByTopics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} setTheme={setTheme} theme={theme}/>
    </div>
  )
}

export default TopNavigation;