import { Paths } from './Paths';

type TranslationMarkedType = {
  [key in Paths]?: {
    header?: {
      title: string;
    };
    scene?: {
      [key: string]: string;
    };
    navbar?: {
      [key: string]: string;
    };
  };
};

export type Translation = {
  translation: TranslationMarkedType & {
    common: {
      header: {
        bodySystems: string;
        procedures: string;
      };
      scene: {
        play: string;
        explore: string;
      };
      navbar: {
        [key: string]: string;
      };
    };
  };
};
