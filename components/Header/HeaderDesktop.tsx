'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navItems } from '@root/lib/data';

const HeaderDesktop = () => {
  const [path, setPath] = useState('');

  return (
    <header className="z-99999 relative">
      <motion.nav
        initial={{ y: -100, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="header-nav"
      >
        <ul className="header-nav-ul">
          {navItems?.map((item) => (
            <li key={item?.key}>
              <Link
                href={item.link}
                className={`uppercase cursor-pointer font-bold hover:text-red-600`}
              >
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default HeaderDesktop;
