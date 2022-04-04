type IconType = {
  id: number;
  title: string;
  route: string;
  code: string;
  icon: string;
};

export const iconList: IconType[] = [
  {
    id: 1,
    title: 'Facebook',
    code: 'fb',

    icon: 'social_facebook',
    route: 'https://www.facebook.com/Omerald-Social-103154488995533',
  },
  {
    id: 2,
    title: 'Twitter',
    route: 'https://twitter.com/OmeraldAvin',
    code: 'tw',
    icon: 'social_twitter',
  },
  {
    id: 3,
    title: 'Pinterest',
    route: 'https://in.pinterest.com/mednologies/_created/',
    code: 'pt',
    icon: 'social_pinterest',
  },
];
