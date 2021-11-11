import React from 'react';
import Header from './Header';
import Media from './Media';
import ActionsBar from './ActionsBar';
import Likes from './Likes';
import Caption from './Caption';
import Posted from './Posted';
import Comment from './Comment';

const Card = props => (
<div className="card">
    <Header 
        profileImageUrl={props.profileImageUrl}
        username={props.username} />
    <Media 
        mediaUrl={props.mediaUrl} />
    <div className="container">
        <ActionsBar 
        like={props.like} />
        <Likes 
        likes={props.likes} />
        <Caption 
        username={props.username}
        caption={props.caption} />
        <Posted
        posted={props.posted} />
        <Comment />
    </div>
    
    
</div>
);

export default Card;