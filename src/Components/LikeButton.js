import React, { useState } from 'react';

import Badge from 'react-bootstrap/Badge';

const LikeButton = () => {
    const [likes, setLikes] = useState(10);

    const handleClick = () => {
        setLikes(likes + 1);
    };

    return (
        <button className='like-button' onClick={ handleClick }>
            <span className='likes-counter'>{`♥ ` }<Badge bg='info'>{likes}</Badge></span>
        </button>
    )
}

export default LikeButton;