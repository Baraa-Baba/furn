import React from 'react';
import Image from 'next/image';
const SingleBlog = ({ blog }) => {
    return (
        <>

            <div className="col-sm-4">
                <div className="single-blog">
                    <div className="single-blog-img">
                        <div className='blog-image-cont'>
                            <img src={blog.imageUrl} alt="blog image" />
                        </div>
                        <div className="single-blog-img-overlay"></div>
                    </div>
                    <div className="single-blog-txt">
                        <h2><a href="#">{blog.title} </a></h2>
                        <h3>By <a href="#">{blog.author}</a> / {blog.date}</h3>
                        <p>
                            {blog.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleBlog;
