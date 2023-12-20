import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УведомлениеMixin
} from '../mixins/regenerated/models/i-i-s-postamat16-уведомление';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УведомлениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
