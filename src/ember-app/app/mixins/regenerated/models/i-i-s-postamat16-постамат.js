import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat16-статусы'),
  службаДоставки: DS.belongsTo('i-i-s-postamat16-служба-доставки', { inverse: null, async: false }),
  регистрХран: DS.hasMany('i-i-s-postamat16-регистр-хран', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-postamat16-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat16-постамат.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat16-постамат.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat16-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрХран: {
    descriptionKey: 'models.i-i-s-postamat16-постамат.validations.регистрХран.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-postamat16-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat16-служба-доставки', 'Служба доставки', {
      наименвоание: attr('Наименвоание', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименвоание' }),
    регистрХран: hasMany('i-i-s-postamat16-регистр-хран', 'Регистр хран', {
      хранение: belongsTo('i-i-s-postamat16-хранение', 'Хранение', {
        продления: attr('Продления', { index: 1, hidden: true }),
        датаНачала: attr('Дата начала хранения', { index: 2 }),
        датаЗавершения: attr('Дата завершения хранения', { index: 3 }),
        ячейка: belongsTo('i-i-s-postamat16-ячейка', '', {
          номерЯчейки: attr('Номер ячейки', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'продления' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-postamat16-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat16-служба-доставки', 'Наименвоание', {
      наименвоание: attr('Наименвоание', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
