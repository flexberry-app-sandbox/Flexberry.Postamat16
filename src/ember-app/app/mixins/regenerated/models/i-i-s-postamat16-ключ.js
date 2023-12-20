import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сгенКлюч: DS.attr('number'),
  пользователь: DS.belongsTo('i-i-s-postamat16-пользователь', { inverse: null, async: false }),
  посылка: DS.belongsTo('i-i-s-postamat16-посылка', { inverse: null, async: false })
});

export let ValidationRules = {
  сгенКлюч: {
    descriptionKey: 'models.i-i-s-postamat16-ключ.validations.сгенКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat16-ключ.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat16-ключ.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-postamat16-уведомление'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлючE', 'i-i-s-postamat16-ключ', {
    сгенКлюч: attr('Сгенерированный ключ', { index: 0 }),
    уведомление: attr('Уведомление', { index: 1 }),
    фИО: attr('ФИО пользователя', { index: 2 }),
    номер: attr('Номер посылки', { index: 3 }),
    пользователь: belongsTo('i-i-s-postamat16-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 5, hidden: true }),
      номерТелефона: attr('Номер телефона пользователя', { index: 6 })
    }, { index: 4, displayMemberPath: 'фИО' }),
    посылка: belongsTo('i-i-s-postamat16-посылка', 'Номер посылка', {
      номер: attr('Номер', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'номер' }),
    хранение: belongsTo('i-i-s-postamat16-хранение', 'Продление посылки', {
      продления: attr('Продления посылик', { index: 10, hidden: true }),
      датаНачала: attr('Дата начала хранения', { index: 11 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 12 })
    }, { index: 9, displayMemberPath: 'продления' })
  });

  modelClass.defineProjection('КлючL', 'i-i-s-postamat16-ключ', {
    сгенКлюч: attr('Сгенерированный ключ', { index: 0 }),
    уведомление: attr('Уведомление', { index: 1 }),
    фИО: attr('ФИО пользователя', { index: 2 }),
    номер: attr('Номер посылки', { index: 3 }),
    пользователь: belongsTo('i-i-s-postamat16-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 4 }),
      номерТелефона: attr('Номер телефона пользователя', { index: 5 })
    }, { index: -1, hidden: true }),
    посылка: belongsTo('i-i-s-postamat16-посылка', 'Номер посылки', {
      номер: attr('Номер посылки', { index: 6 })
    }, { index: -1, hidden: true }),
    хранение: belongsTo('i-i-s-postamat16-хранение', 'Продления посылки', {
      продления: attr('Продления посылки', { index: 7 }),
      датаНачала: attr('Дата начала хранения', { index: 8 }),
      датаЗавершения: attr('Дата начала хранения', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
