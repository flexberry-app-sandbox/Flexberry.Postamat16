import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  хранение: DS.belongsTo('i-i-s-postamat16-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat16-постамат', { inverse: 'регистрХран', async: false })
});

export let ValidationRules = {
  хранение: {
    descriptionKey: 'models.i-i-s-postamat16-регистр-хран.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat16-регистр-хран.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрХранE', 'i-i-s-postamat16-регистр-хран', {
    хранение: belongsTo('i-i-s-postamat16-хранение', 'Хранение', {
      продления: attr('Продления', { index: 1, hidden: true }),
      датаНачала: attr('Дата начала хранения', { index: 2 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 3 }),
      ячейка: belongsTo('i-i-s-postamat16-ячейка', '', {
        номерЯчейки: attr('Номер ячейки', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'продления' })
  });
};
