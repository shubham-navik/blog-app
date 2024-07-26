import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
    const { posts, loading } = useContext(AppContext);

    return (
        <div className='w-11/12 max-w-[600px]  flex flex-col gap-y-7 mt-20 mb-20 items-center '>
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div>
                    <p>No posts found</p>
                </div>
            ) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <p className='text-xl font-semibold pb-2'>{post.title}</p>
                        <p className='text-[15px]'>
                            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p>
                        <p className='mt-3'>{post.content}</p>
                        <div className='flex gap-x-2'>
                            {post.tags.map((tag, index) => (
                                <span key={index} className='text-blue-500 underline font-bold capitalize text-[12px] '>{`#${tag}`}</span>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blogs;
