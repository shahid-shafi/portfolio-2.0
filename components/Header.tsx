'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navItems } from '@root/lib/data';

const Header = () => {
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
        className="header-nav"
      >
        <ul className="header-nav-ul">
          {navItems?.map((item) => (
            <li key={item?.key}>
              <Link href={item.link} passHref>
                <div
                  className={`uppercase font-bold hover:text-red-600 ${
                    path === item.link ? 'text-red-600' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  {item?.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
