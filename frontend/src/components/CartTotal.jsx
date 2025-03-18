import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useTranslation } from 'react-i18next'; 
const CartTotal = () => {
    const { t } = useTranslation();
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    // Format price properly
    const formatPrice = (amount) => new Intl.NumberFormat( { style: 'currency', currency }).format(amount);

    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={t('carto.title1')} text2={t('carto.title2')} />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>{t('carto.subtotal')}</p>
                    <p>{formatPrice(subtotal)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>{t('carto.shipping')}</p>
                    <p>{formatPrice(delivery_fee)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>{t('carto.total')}</b>
                    <b>{formatPrice(total)}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
