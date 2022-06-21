import React, { useState } from 'react';

import SingleBlog from './SingleBlog';


const Blog = ({ blogs }) => {
    const [blogss, setblogss] = useState(blogs)
    return (
        <>

            {/*blog start  */}
            <section id="blog" className="blog">
                <div className="container">
                    <div className="section-header">
                        <h2>latest blog</h2>
                    </div>{/*/.section-header */}
                    <div className="blog-content">
                        <div className="row">
                            {blogss.map(blog =>
                                <div key={blog.id}>
                                    <SingleBlog blog={blog} setblogss={setblogss} />
                                </div>)}
                        </div>
                    </div>
                </div>{/*/.container */}

            </section>{/*/.blog */}
            {/*blog end  */}
        </>
    );
}

export default Blog;
