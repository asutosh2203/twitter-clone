import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaHeart,
  FaChartColumn,
  FaRegBookmark,
  FaRegShareFromSquare,
} from 'react-icons/fa6';
import './Post.css';

const Post: React.FC<{ caption?: string; imageUrl?: string }> = ({
  caption = 'Look at that hair!',
  imageUrl = 'https://pbs.twimg.com/profile_images/1293566401358094341/tX2TEOv2_400x400.jpg',
}) => {
  return (
    <div className='flex items-start border-b p-5 border-white/20'>
      <img
        src='https://pbs.twimg.com/profile_images/1293566401358094341/tX2TEOv2_400x400.jpg'
        className='rounded-full h-10 mr-5'
      />
      <div className='w-full'>
        <div className='flex justify-between h-10'>
          <div className='flex gap-2'>
            <p className='font-extrabold'>Name of the account</p>
            <p className='font-thin'>@username</p>
            <p className='font-thin'>6h</p>
          </div>
          <BsThreeDots color={'#888'} size={20} className={'cursor-pointer'} />
        </div>
        <div>
          {caption.length > 0 && caption}
          {imageUrl.length > 0 && (
            <img src={imageUrl} className='w-full my-4 rounded-xl' />
          )}
        </div>
        <div className='flex items-center justify-between text-[#888] '>
          <div className='flex-align-center hover:text-primary  transition-300 cursor-pointer'>
            <FaRegComment /> <p className='text-sm'>131</p>
          </div>

          <div className='flex-align-center hover:text-[#00BA7C]  transition-300 cursor-pointer'>
            <FaRetweet />
            <p className='text-sm'>20</p>
          </div>

          <div className='flex-align-center hover:text-[#EB1779]  transition-300 cursor-pointer'>
            <FaRegHeart />
            <p className='text-sm'>172</p>
          </div>

          <div className='flex-align-center hover:text-primary  transition-300 cursor-pointer'>
            <FaChartColumn />
            <p className='text-sm'>29K</p>
          </div>

          <div className='flex-align-center'>
            <div className='sq-8 hover:bg-primary/20 rounded-center transition-300 cursor-pointer'>
              <FaRegBookmark className='hover:text-primary ' />
            </div>

            <div className='sq-8 hover:bg-primary/20 rounded-center cursor-pointer'>
              <FaRegShareFromSquare className='hover:text-primary  transition-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
