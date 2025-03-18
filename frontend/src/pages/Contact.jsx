import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={t('contactt.title')} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>{t('contactt.store')}</p>
          <p className='text-gray-500'>{t('contactt.address')}</p>
          <p className='text-gray-500'>{t('contactt.phone')} <br /> {t('contactt.email')}</p>
          <p className='text-gray-500'>{t('contactt.question')}</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
