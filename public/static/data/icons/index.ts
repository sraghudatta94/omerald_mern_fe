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
    route: '/',
    icon: 'social_facebook',
  },
  {
    id: 2,
    title: 'Twitter',
    route: '/',
    code: 'tw',
    icon: 'social_twitter',
  },
  {
    id: 3,
    title: 'Pinterest',
    route: '/',
    code: 'pt',
    icon: 'social_pinterest',
  },
];
