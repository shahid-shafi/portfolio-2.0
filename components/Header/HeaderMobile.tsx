'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navItems } from '@root/lib/data';

const HeaderMobile = () => {
  const [path, setPath] = useState('');

  return (
    <header>
      <div className="h-12 w-full bg-slate-950 top-0"></div>
      <motion.nav
        initial={{ x: -100, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        className="header-nav-mobile"
      >
        <ul className="header-nav-ul-mobile">
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

export default HeaderMobile;
