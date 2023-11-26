import Link from 'next/link';
import React from 'react';

const SidebarItem: React.FC<{
  Icon?: any;
  optionName?: string;
  selected?: boolean;
}> = ({ Icon, optionName, selected = false }) => {
  return (
    <Link
      href={`/${optionName}`}
      className={`flex max-w-max xl:max-w-[240px] mx-auto items-center gap-4 my-1 rounded-full p-3 text-xl hover:bg-[#22222294] hover:transition-all cursor-pointer text-white/80 ${
        selected && 'selected'
      }`}
    >
      <Icon size={25} />
      <p className='hidden xl:inline capitalize'>{optionName}</p>
    </Link>
  );
};

export default SidebarItem;

/*
flex justify-center bg-[#1DA1F2] max-w-max xl:max-w-[240px] mx-auto my-6 rounded-full p-3 font-bold hover:bg-[#1d92f2] hover:transition-all cursor-pointer
*/
