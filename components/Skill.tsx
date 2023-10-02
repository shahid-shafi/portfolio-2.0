'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { DAILY_APPLICATION_Type } from '@root/lib/skillset';

type Props = {
  app: DAILY_APPLICATION_Type;
};

const Skill = ({ app }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: app.app * 0.05, ease: 'easeInOut' }}
      key={app.app}
      className="relative py-4 basis-[150px] grow flex flex-col justify-center items-center shadow-lg rounded-xl border overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary before:to-secondary before:opacity-0 hover:before:opacity-20 duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        height={48}
        width={48}
        src={app.img}
        className="object-contain"
        alt={app.name}
      />
      <h3 className="my-2 font-medium">{app.name}</h3>
      <AnimatePresence>
        {isHovered && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            className="w-full pl-8 overflow-hidden text-sm list-disc"
          >
            {app.useCase.map((uses: any, index: any) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                {uses}
              </motion.div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {app.app == 1 && (
        <div className="absolute w-24 h-24 rounded-full bg-light-blue animate-hoverMe" />
      )}
    </motion.div>
  );
};

export default Skill;
