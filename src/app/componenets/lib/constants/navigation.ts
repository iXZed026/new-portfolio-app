// lib/constants/navigation.ts

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
  },
];