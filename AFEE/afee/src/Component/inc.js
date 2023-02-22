import React, { useState,useEffect } from 'react';

export default function Inc() {
    const [content,setContent]=useState("Post");
    const [count,setCount]=useState(0);
  return (
    <>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    {count}
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <h1>{content}</h1>
    <button onClick={()=>{setContent("Comment")}}>Comment</button><br></br>
    <button onClick={()=>{setContent("Post")}}>Post</button><br></br>
    <button onClick={()=>{setContent("Like")}}>Like</button>

    </>
  );
}
