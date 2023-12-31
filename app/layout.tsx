'use client';
import './globals.scss';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@root/components/Footer';
import ThemeContextProvider from '@root/context/theme-context';
import Header from '@root/components/Header/Header';
import ActiveSectionContextProvider from '@root/context/active-section-context';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Shahid Shafi | Personal Portfolio',
//   description: 'Shahid shafi is a full-stack developer with 1 year experience.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            {/* <Footer /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
