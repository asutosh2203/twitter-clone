'use client';

import React, { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import {
  MdOutlineGifBox,
  MdOutlineLocationOn,
  MdOutlinePoll,
  MdOutlineCalendarToday,
  MdOutlineEmojiEmotions,
} from 'react-icons/md';
import { IoEarthSharp } from 'react-icons/io5';
const CreateTweet = () => {
  const [tweet, setTweet] = useState('');
  const [isTweetFocused, setIsTweetFocused] = useState(false);

  return (
    <div className='hidden sm:flex items-start border-b border-white/20 p-5'>
      <img
        src='https://pbs.twimg.com/profile_images/1293566401358094341/tX2TEOv2_400x400.jpg'
        className='rounded-full h-10 mr-5'
      />
      <div className='flex-1 pt-2'>
        <textarea
          className='bg-transparent placeholder:text-xl focus:outline-none w-full h-10 resize-none'
          placeholder='What is happening?!'
          value={tweet}
          onChange={(e) => {
            setTweet(e.target.value);
          }}
          onFocus={() => {
            setIsTweetFocused(true);
          }}
          onBlur={() => {
            setIsTweetFocused(false);
          }}
        />
        {isTweetFocused && (
          <div className='text-primary flex items-center gap-3 mb-3 border-b border-white/30 pb-3'>
            <IoEarthSharp />
            Everyone can reply
          </div>
        )}
        <div className='flex items-center justify-between '>
          <div className='flex gap-4 text-primary'>
            <AiOutlinePicture size={24} />
            <MdOutlineGifBox size={24} />
            <MdOutlinePoll size={24} />
            <MdOutlineLocationOn size={24} />
          </div>
          <button
            disabled={!tweet}
            className='bg-primary disabled:bg-[#87cefa] py-2 px-5 rounded-full font-bold'
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
