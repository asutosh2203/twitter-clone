import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoHomeFill, GoPeople } from 'react-icons/go';
import { IoMdNotificationsOutline, IoMdList, IoMdAdd } from 'react-icons/io';
import {
  FaRegEnvelope,
  FaRegBookmark,
  FaRegUser,
  FaPlus,
} from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='flex[0.1] xl:flex-[0.25] border-r border-white/20'>
      <div className='flex flex-col justify-between h-full mx-auto max-w-[240px]'>
        <div>
          <Link href={'/home'}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553'
              className='h-12 mx-auto xl:mx-0 my-4 py-2 px-5 cursor-pointer'
              height={20}
            />
          </Link>
          <SidebarItem Icon={GoHomeFill} optionName='home' selected />
          <SidebarItem Icon={AiOutlineSearch} optionName='explore' />
          <SidebarItem
            Icon={IoMdNotificationsOutline}
            optionName='notifications'
          />
          <SidebarItem Icon={FaRegEnvelope} optionName='messages' />
          <SidebarItem Icon={GoPeople} optionName='communities' />
          <SidebarItem Icon={IoMdList} optionName='lists' />
          <SidebarItem Icon={FaRegBookmark} optionName='bookmarks' />
          <SidebarItem Icon={FaRegUser} optionName='profile' />

          {/* Post Button */}
          <div className='flex justify-center bg-[#1DA1F2] max-w-max xl:max-w-[240px] mx-auto my-6 rounded-full p-3 font-bold hover:bg-[#1d92f2] hover:transition-all cursor-pointer'>
            <p className='hidden xl:inline'>Post</p>
            <span className='xl:hidden'>
              <FaPlus size={20} />
            </span>
          </div>
        </div>

        {/* Profile */}
        <div className='flex items-center justify-between rounded-full mb-5 py-3 px-5 text-xl xl:hover:bg-[#22222294] hover:transition-all cursor-pointer'>
          <img
            src='https://pbs.twimg.com/profile_images/1293566401358094341/tX2TEOv2_400x400.jpg'
            className='rounded-full h-12'
          />
          <div className='text-base hidden xl:inline'>
            <p className='font-extrabold'>Asutosh Padhi</p>
            <p className='font-light text-white/50'>@_padhi_</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
