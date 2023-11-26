import React from 'react';
import CreateTweet from './CreateTweet';

const Feed = () => {
  return (
    <div className='flex-1 md:flex-[0.6] min-h-screen border-x border-white/20 ml-[88px] xl:ml-72'>
      <div className='flex items-center justify-around border-b border-white/20 text-sm text-white/50'>
        <p className='border-b-2 border-primary py-5'>For You</p>
        <p className='py-5'>Following</p>
      </div>
      <CreateTweet />
    </div>
  );
};

export default Feed;
