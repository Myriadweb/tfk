import React from 'react';
import { Outlet } from 'react-router-dom';

export function Header() {
  return <div className='App-header' />;
}

export function NavBar() {
  return <div className='App-navigation'></div>;
}

export function Home() {
  return (
    <div className='App'>
      <Header />
      <div className='App-stage'>
        <Outlet />
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
