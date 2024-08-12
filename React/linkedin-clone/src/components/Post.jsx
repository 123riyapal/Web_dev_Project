import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import FeedInputIcons from './FeedInputIcons'
import RepeatIcon from '@mui/icons-material/Repeat';
import { CommentOutlined, Send, ThumbUpAltOutlined } from '@mui/icons-material'
function Post({name,description,message,photoUrl}) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__bottom__buttons">
            <FeedInputIcons Icon={ThumbUpAltOutlined} title='Like' color='gray'/>
            <FeedInputIcons Icon={CommentOutlined} title='comment' color='gray'/>
            <FeedInputIcons Icon={RepeatIcon} title='Repost' color='gray'/>
            <FeedInputIcons Icon={Send} title='Sent' color='gray'/>

        </div>
        </div>
    )
}

export default Post
