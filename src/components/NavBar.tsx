import React from 'react';
import { Paths } from '../types/Paths';
import { getNavbarComponent } from '../getters';

type Props = {
  path: Paths;
};

export function NavBar({ path }: Props) {
  const Component = getNavbarComponent(path);

  return (
    <div className='App-navigation'>
      <Component path={path} />
    </div>
  );
}
