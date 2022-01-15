import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/1352A/production/_103464197_luke-watkin.gif' />
      <div>
        {props.message}
      </div>
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;