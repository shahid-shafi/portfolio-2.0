import React from 'react';
import { BiHomeSmile, BiSolidContact } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { GrProjects } from 'react-icons/gr';
import { MdWorkHistory } from 'react-icons/md';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

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

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;
