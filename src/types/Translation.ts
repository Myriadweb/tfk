import { Paths } from './Paths';

export type Translation = {
  translation: {
    [key in Paths]?: {
      header?: {
        [key: string]: string;
      };
      scene?: {
        [key: string]: string;
      };
      navbar?: {
        [key: string]: string;
      };
    };
  };
};
