```tsx
import React, { createContext, useState } from 'react';
import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';

// Available translations
const translations = {
  en: require('./en.json'),
  hi: require('./hi.json'),
  ta: require('./ta.json'),
  te: require('./te.json'),
  mr: require('./mr.json'),
  gu: require('./gu.json'),
  bn: require('./bn.json'),
  pa: require('./pa.json'),
};

// Set the locale once at the start of your app
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || { languageTag: 'en' };
i18n.locale = languageTag;
i18n.translations = translations;
i18n.fallbacks = true;

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(languageTag);

  const localizationContext = {
    t: (scope, options) => i18n.t(scope, { locale, ...options }),
    locale,
    setLocale,
  };

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  );
};
```