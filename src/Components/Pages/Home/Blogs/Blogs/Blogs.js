import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import CustomButton from '../../../../Shared/CustomButton/CustomButton';
import Heading from '../../../../Shared/Heading/Heading';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('HomeAnnouncement.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='container'>
            <Heading heading="From Our Blog" subtitle="
From Our Blog
" />
            <Carousel

                infiniteLoop={true}
                responsive={responsive}
                itemClass="image-item mt-5"
                infinite={true}
                autoPlay
                rewind
                autoPlaySpeed={2000}

            >
                {
                    (blogs.map(blog => <Blog key={blog.serial} blog={blog} />))

                }
                {
                    blogs.map(blog => <Blog key={blog.serial} blog={blog} />)
                }
            </Carousel>
            <h5 className='text-center'>Please find below our blog posts.</h5>
            <center className="mt-4 mb-4">

                <CustomButton title="View All" backgroundColor="#0097fa" height="49px" width="140px" />
            </center>
        </div>

    );
};

export default Blogs;