import React from 'react';


const ActionsBar =  props => (
    <div className="ActionBar">
        <div className="left">
            <div className="like">
                <i className={props.like}></i>
            </div>
            <div className="comment">
                <i className="far fa-comment"></i>
            </div>
            <div className="share">
                <i className="fas fa-share"></i>
            </div>
        </div>
    </div>
);

export default ActionsBar;