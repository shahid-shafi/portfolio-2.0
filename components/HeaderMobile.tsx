'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '@root/lib/data';
import Link from 'next/link';

const HeaderMobile = () => {
  const [path, setPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <header>
      <motion.nav
        initial={{ y: -100, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-black px-8 py-3"
      >
        <ul className="flex gap-4">
          {navItems?.map((item) => {
            const { Icon } = item;
            return (
              <li key={item?.key}>
                <Link href={item.link} passHref>
                  <Icon className="text-3xl text-white" />
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
};

export default HeaderMobile;
