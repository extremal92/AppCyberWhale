import React from 'react';
import { useTranslation } from 'react-i18next';



export const Language = () => {
    const [t, i18n] = useTranslation(),
    changeLang = (lang) => () => i18n.changeLanguage(lang);
    return (
        <div className='headerLanguage'>
            <button onClick={changeLang('ru')}>
                ru
            </button>
            <button onClick={changeLang('ev')}>
                ev
            </button>
        </div>
    )
}
