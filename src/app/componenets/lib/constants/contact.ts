import React from 'react';
import {
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
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
    platform: 'Linkedin',
    value: 'Danyal Lotfi',
    href: 'https://www.linkedin.com/in/danyal-lotfi-831913354?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: FaLinkedin,
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