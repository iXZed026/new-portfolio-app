// lib/constants/footer.ts

import {
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FooterNavItem {
  id: string;
  label: string;
}

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/danyal-xzdev',
    icon: FaInstagram,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/ixzed026',
    icon: FaTelegram,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/iXZed026',
    icon: FaGithub,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:danyal.lotfi2183@gmail.com',
    icon: FaEnvelope,
  },
];

export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'about',
    label: 'About',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'projects',
    label: 'Projects',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];