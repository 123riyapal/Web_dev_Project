import React from 'react';
import './FeedInputIcon.css';

function FeedInputIcons({ Icon, title, color }) {
    return (
        <div className='feedInputIcon'>
            {Icon && <Icon className="feed_icons" style={{ color: color }} />}
            <h3 className='feed__Icons__title'>{title}</h3>
        </div>
    );
}

export default FeedInputIcons;
