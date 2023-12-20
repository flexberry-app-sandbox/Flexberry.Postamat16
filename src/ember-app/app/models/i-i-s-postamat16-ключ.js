import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as КлючMixin
} from '../mixins/regenerated/models/i-i-s-postamat16-ключ';

import УведомлениеModel from './i-i-s-postamat16-уведомление';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-postamat16-уведомление';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = УведомлениеModel.extend(КлючMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
