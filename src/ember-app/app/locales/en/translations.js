import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamat16КлючLForm from './forms/i-i-s-postamat16-ключ-l';
import IISPostamat16ЛогистикаLForm from './forms/i-i-s-postamat16-логистика-l';
import IISPostamat16ПользовательLForm from './forms/i-i-s-postamat16-пользователь-l';
import IISPostamat16ПостаматLForm from './forms/i-i-s-postamat16-постамат-l';
import IISPostamat16ПосылкаLForm from './forms/i-i-s-postamat16-посылка-l';
import IISPostamat16СлужбаДоставкиLForm from './forms/i-i-s-postamat16-служба-доставки-l';
import IISPostamat16УведомлениеLForm from './forms/i-i-s-postamat16-уведомление-l';
import IISPostamat16ХранениеLForm from './forms/i-i-s-postamat16-хранение-l';
import IISPostamat16ЯчейкаLForm from './forms/i-i-s-postamat16-ячейка-l';
import IISPostamat16КлючEForm from './forms/i-i-s-postamat16-ключ-e';
import IISPostamat16ЛогистикаEForm from './forms/i-i-s-postamat16-логистика-e';
import IISPostamat16ПользовательEForm from './forms/i-i-s-postamat16-пользователь-e';
import IISPostamat16ПостаматEForm from './forms/i-i-s-postamat16-постамат-e';
import IISPostamat16ПосылкаEForm from './forms/i-i-s-postamat16-посылка-e';
import IISPostamat16СлужбаДоставкиEForm from './forms/i-i-s-postamat16-служба-доставки-e';
import IISPostamat16УведомлениеEForm from './forms/i-i-s-postamat16-уведомление-e';
import IISPostamat16ХранениеEForm from './forms/i-i-s-postamat16-хранение-e';
import IISPostamat16ЯчейкаEForm from './forms/i-i-s-postamat16-ячейка-e';
import IISPostamat16КлючModel from './models/i-i-s-postamat16-ключ';
import IISPostamat16ЛогистикаModel from './models/i-i-s-postamat16-логистика';
import IISPostamat16ПользовательModel from './models/i-i-s-postamat16-пользователь';
import IISPostamat16ПостаматModel from './models/i-i-s-postamat16-постамат';
import IISPostamat16ПосылкаModel from './models/i-i-s-postamat16-посылка';
import IISPostamat16РегистрПосылкиModel from './models/i-i-s-postamat16-регистр-посылки';
import IISPostamat16РегистрХранModel from './models/i-i-s-postamat16-регистр-хран';
import IISPostamat16СлужбаДоставкиModel from './models/i-i-s-postamat16-служба-доставки';
import IISPostamat16УведомлениеModel from './models/i-i-s-postamat16-уведомление';
import IISPostamat16ХранениеModel from './models/i-i-s-postamat16-хранение';
import IISPostamat16ЯчейкаModel from './models/i-i-s-postamat16-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat16-ключ': IISPostamat16КлючModel,
    'i-i-s-postamat16-логистика': IISPostamat16ЛогистикаModel,
    'i-i-s-postamat16-пользователь': IISPostamat16ПользовательModel,
    'i-i-s-postamat16-постамат': IISPostamat16ПостаматModel,
    'i-i-s-postamat16-посылка': IISPostamat16ПосылкаModel,
    'i-i-s-postamat16-регистр-посылки': IISPostamat16РегистрПосылкиModel,
    'i-i-s-postamat16-регистр-хран': IISPostamat16РегистрХранModel,
    'i-i-s-postamat16-служба-доставки': IISPostamat16СлужбаДоставкиModel,
    'i-i-s-postamat16-уведомление': IISPostamat16УведомлениеModel,
    'i-i-s-postamat16-хранение': IISPostamat16ХранениеModel,
    'i-i-s-postamat16-ячейка': IISPostamat16ЯчейкаModel
  },

  'application-name': 'Postamat16',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat16',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat16',
          title: 'Postamat16'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postamat16: {
          caption: 'Postamat16',
          title: 'Postamat16',
          'i-i-s-postamat16-посылка-l': {
            caption: 'Посылка',
            title: ''
          },
          'i-i-s-postamat16-ячейка-l': {
            caption: 'Ячейка',
            title: ''
          },
          'i-i-s-postamat16-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat16-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat16-ключ-l': {
            caption: 'Ключ',
            title: ''
          },
          'i-i-s-postamat16-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat16-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat16-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat16-уведомление-l': {
            caption: 'Уведомление',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat16-ключ-l': IISPostamat16КлючLForm,
    'i-i-s-postamat16-логистика-l': IISPostamat16ЛогистикаLForm,
    'i-i-s-postamat16-пользователь-l': IISPostamat16ПользовательLForm,
    'i-i-s-postamat16-постамат-l': IISPostamat16ПостаматLForm,
    'i-i-s-postamat16-посылка-l': IISPostamat16ПосылкаLForm,
    'i-i-s-postamat16-служба-доставки-l': IISPostamat16СлужбаДоставкиLForm,
    'i-i-s-postamat16-уведомление-l': IISPostamat16УведомлениеLForm,
    'i-i-s-postamat16-хранение-l': IISPostamat16ХранениеLForm,
    'i-i-s-postamat16-ячейка-l': IISPostamat16ЯчейкаLForm,
    'i-i-s-postamat16-ключ-e': IISPostamat16КлючEForm,
    'i-i-s-postamat16-логистика-e': IISPostamat16ЛогистикаEForm,
    'i-i-s-postamat16-пользователь-e': IISPostamat16ПользовательEForm,
    'i-i-s-postamat16-постамат-e': IISPostamat16ПостаматEForm,
    'i-i-s-postamat16-посылка-e': IISPostamat16ПосылкаEForm,
    'i-i-s-postamat16-служба-доставки-e': IISPostamat16СлужбаДоставкиEForm,
    'i-i-s-postamat16-уведомление-e': IISPostamat16УведомлениеEForm,
    'i-i-s-postamat16-хранение-e': IISPostamat16ХранениеEForm,
    'i-i-s-postamat16-ячейка-e': IISPostamat16ЯчейкаEForm
  },

});

export default translations;
