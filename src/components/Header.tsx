import React from 'react';
import { Paths } from '../types/Paths';
import { useHeaderTranslation } from "../hooks";

type Props = {
  path: Paths;
}

export function Header(props: Props) {
  const t = useHeaderTranslation(props.path);

  return <div className='App-header'>{t('title')}</div>;
}
