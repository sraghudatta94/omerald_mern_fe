type LinkType = {
  id: number;
  title: string;
  route: string;
};

export const navLinks: LinkType[] = [
  {
    id: 1,
    title: 'Home',
    route: '/',
  },
  {
    id: 2,
    title: 'Article',
    route: '/article',
  },
  {
    id: 3,
    title: 'Register',
    route: '/register',
  },
  {
    id: 4,
    title: 'Authors',
    route: '/authors',
  },
  {
    id: 5,
    title: 'Topics',
    route: '/topics',
  },
];