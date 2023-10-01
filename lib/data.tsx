import { BiHomeSmile, BiSolidContact } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { GrProjects } from 'react-icons/gr';
import { MdWorkHistory } from 'react-icons/md';

export const navItems = [
  {
    key: 'home',
    title: 'Home',
    link: '#home',
    Icon: BiHomeSmile,
  },
  {
    key: 'about',
    title: 'About',
    link: '#about',
    Icon: FcAbout,
  },
  {
    key: 'skills',
    title: 'Skills',
    link: '#skills',
    Icon: HiWrenchScrewdriver,
  },
  {
    key: 'projects',
    title: 'Projects',
    link: '#projects',
    Icon: GrProjects,
  },
  {
    key: 'experience',
    title: 'Experience',
    link: '#experience',
    Icon: MdWorkHistory,
  },
  {
    key: 'contact',
    title: 'Contact',
    link: '#contact',
    Icon: BiSolidContact,
  },
];
