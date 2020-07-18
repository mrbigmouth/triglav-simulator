import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n';

Vue.use(VueI18n);

let defaultUseLanguage = localStorage.getItem('defaultUseLanguage');
if (!defaultUseLanguage) {
  defaultUseLanguage = navigator.language.slice(0, 2);
  if (defaultUseLanguage === 'zh') {
    defaultUseLanguage = navigator.language.slice(0, 5);
  }
}

const i18n = new VueI18n({
  locale: defaultUseLanguage,
  fallbackLocale: 'en',
  messages,
});

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
};

export { i18n };
