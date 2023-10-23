import React, { useState } from "react";
// @ts-ignore
import { PostItem } from "./PostItem.tsx";



export const PostList = ({posts, title, remove}) => {
    return (
      <div className='App'>
        <h1 style={{ textAlign: 'center' }}>
          {title}
        </h1>
        {posts.map((post, index) =>
          <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
        )}
      </div>
    );
  }