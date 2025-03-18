import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useTranslation } from 'react-i18next';

const NewsletterBox = () => {
  const { t } = useTranslation(); // ✅ Import translation function
  const { navigate, token } = useContext(ShopContext);

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>{t('subscribe_now')}</p> 
      <p className='text-gray-400 mt-3'>{t('newsletter_desc')}</p> 
      <br />
      <button
        onClick={() => (token ? null : navigate('/login'))}
        className='bg-black text-white text-xs px-10 py-4'
      >
        {t('subscribe')}
      </button>
    </div>
  );
};

export default NewsletterBox;
