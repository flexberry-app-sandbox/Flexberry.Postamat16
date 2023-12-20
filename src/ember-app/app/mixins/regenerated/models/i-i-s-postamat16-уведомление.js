import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  сгенКлюч: DS.attr('number'),
  уведомление: DS.attr('string'),
  фИО: DS.attr('string'),
  хранение: DS.belongsTo('i-i-s-postamat16-хранение', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat16-уведомление.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-postamat16-уведомление.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сгенКлюч: {
    descriptionKey: 'models.i-i-s-postamat16-уведомление.validations.сгенКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  уведомление: {
    descriptionKey: 'models.i-i-s-postamat16-уведомление.validations.уведомление.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-postamat16-уведомление.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat16-уведомление.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УведомлениеE', 'i-i-s-postamat16-уведомление', {
    уведомление: attr('Уведомление', { index: 0 }),
    сгенКлюч: attr('Сгенерированный ключ', { index: 1 }),
    фИО: attr('ФИО пользователя', { index: 2 }),
    номерТелефона: attr('Номер телефона пользователя', { index: 3 }),
    номер: attr('Номер посылки', { index: 4 }),
    хранение: belongsTo('i-i-s-postamat16-хранение', 'Продление посылки', {
      продления: attr('Продления посылки', { index: 6, hidden: true }),
      датаНачала: attr('Дата начала хранения', { index: 7 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 8 })
    }, { index: 5, displayMemberPath: 'продления' })
  });

  modelClass.defineProjection('УведомлениеL', 'i-i-s-postamat16-уведомление', {
    уведомление: attr('Уведомление', { index: 0 }),
    сгенКлюч: attr('Сгенерированный ключ', { index: 1 }),
    фИО: attr('ФИО пользователя', { index: 2 }),
    номерТелефона: attr('Номер телефона пользователя', { index: 3 }),
    номер: attr('Номер посылки', { index: 4 }),
    хранение: belongsTo('i-i-s-postamat16-хранение', 'Продление посылки', {
      продления: attr('Продление посылки', { index: 5 }),
      датаНачала: attr('Дата начала хранения', { index: 6 }),
      датаЗавершения: attr('Дата завершение хранения', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
