import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ev from './ev.json';
import ru from './ru.json';



const resources = {
  ev,
  ru
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ev", 

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
