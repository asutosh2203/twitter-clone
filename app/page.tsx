//st0gQze9u6to7WIi

import { Sidebar } from './Components';
import Feed from './Components/Feed';

export default function Home() {
  return (
    <div className='max-w-5xl xl:max-w-7xl mx-auto flex'>
      <Sidebar />
      <Feed/>
    </div>
  );
}
