import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    return (
        <div className='card h-100' >
            <img src={blog.img1} width="100% " alt="" />
            <h5 className='blogHeading'>{blog.title}</h5>
            <p className='activityText'>{blog.desc1.slice(0, 298)}</p>
        </div>
    );
};

export default Blog;