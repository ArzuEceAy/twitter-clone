import React from 'react';
import Logo from './logo';
import Menu from './menu';
import Account from './account';

export default function Sidebar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col no-scrollbar sticky top-0">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
