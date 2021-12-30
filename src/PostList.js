import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
import './PostList.css'

function PostList(props) {

    const {title,description} = props;
    const [posts,setData] = useState([])

    useEffect(()=>{
        console.log("Rendering component")
        axios.get('https://rsbook.herokuapp.com/posts')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    console.log(posts)

    return (
        <div>
            {posts.map(post=>(
                <div className='postName'>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <h3>-{post.author}</h3>
                </div>
            ))}
        </div>
    )
}

export default PostList
