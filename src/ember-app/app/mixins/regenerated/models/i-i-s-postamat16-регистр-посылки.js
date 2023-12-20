import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  посылка: DS.belongsTo('i-i-s-postamat16-посылка', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat16-хранение', { inverse: 'регистрПосылки', async: false })
});

export let ValidationRules = {
  посылка: {
    descriptionKey: 'models.i-i-s-postamat16-регистр-посылки.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat16-регистр-посылки.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрПосылкиE', 'i-i-s-postamat16-регистр-посылки', {
    посылка: belongsTo('i-i-s-postamat16-посылка', 'Посылка', {
      номер: attr('Номер', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'номер' })
  });
};
