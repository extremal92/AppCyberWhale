import React from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from './Language';


function Header () {
    const [ t, i18n ] = useTranslation();
    return(
    <div className="header">
      <div className='container'>
        <div className="header__main">
          <h1>{t('test_message')}</h1>
          <Language/>
        </div>
      </div>
    </div>

    )
}

export default React.memo(Header);