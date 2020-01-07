import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhLocale from './zh'
import enLocale from './en'
import koLocale from './ko'
import jaLocale from './ja'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocale
  },
  en: {
    ...enLocale
  },
  ko: {
    ...koLocale
  },
  ja: {
    ...jaLocale
  }
}

var type = navigator.appName;
if (type == "Netscape") {
  var lang = navigator.language; //获取浏览器配置语言，支持非IE浏览器
} else {
  var lang = navigator.userLanguage; //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
};
var lang = lang.substr(0, 2); //获取浏览器配置语言前两位
console.log(lang)
const i18n = new VueI18n({
  locale: lang || 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})

export default i18n