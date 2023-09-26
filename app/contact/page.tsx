'use client';
import './index.scss';
import ContactForm from './ContactForm';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../../components/Map'), {
  ssr: false,
});
const ContactPage = () => {
  return (
    <div className="flex-wrap">
      <ContactForm />
      <DynamicMap />
    </div>
  );
};

export default ContactPage;
