import React from 'react';
import {
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

export interface ContactLink {
  platform: string;
  value: string;
  href: string;
  icon: React.ElementType;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    platform: 'Instagram',
    value: '@danyal_xzdev',
    href: 'https://instagram.com/danyal_xzdev',
    icon: FaInstagram,
  },
  {
    platform: 'Telegram',
    value: '@ixzed026',
    href: 'https://t.me/iXZed026',
    icon: FaTelegram,
  },
  {
    platform: 'GitHub',
    value: 'iXZed026',
    href: 'https://github.com/iXZed026',
    icon: FaGithub,
  },
  {
    platform: 'Email',
    value: 'danyal.lotfi2183@gmail.com',
    href: 'mailto:danyal.lotfi2183@gmail.com',
    icon: FaEnvelope,
  },
];