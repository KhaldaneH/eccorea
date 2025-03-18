import React from 'react';
import { assets } from '../assets/assets';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(); // ✅ Import translation function

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-20' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                {t('footer.description')}
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>{t('footer.company')}</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>{t('footer.home')}</li>
                <li>{t('footer.about')}</li>
                <li>{t('footer.delivery')}</li>
                <li>{t('footer.privacy')}</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>{t('footer.get_in_touch')}</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>{t('footer.phone')}</li>
                <li>{t('footer.email')}</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>{t('footer.copyright')}</p>
      </div>
    </div>
  );
};

export default Footer;
