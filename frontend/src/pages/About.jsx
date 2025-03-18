import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={t('aboutt.title')} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.hero} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-800'>{t('aboutt.who')}</b>
          <p>{t('aboutt.who_desc')}</p>
          <b className='text-gray-800'>{t('aboutt.products')}</b>
          <p>
            <b>{t('aboutt.honey')}</b> {t('aboutt.honey_desc')}<br />
            <b>{t('aboutt.argan_oil')}</b> {t('aboutt.argan_oil_desc')}<br />
            <b>{t('aboutt.soap')}</b> {t('aboutt.soap_desc')}
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={t('aboutt.why_choose_us')} />
        </div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>{t('aboutt.quality')}</b>
    <p className='text-gray-600'>{t('aboutt.quality_desc')}</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>{t('aboutt.convenience')}</b>
    <p className='text-gray-600'>{t('aboutt.convenience_desc')}</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>{t('aboutt.service')}</b>
    <p className='text-gray-600'>{t('aboutt.service_desc')}</p>
  </div>
</div>

      <NewsletterBox />
    </div>
  );
};

export default About;
