import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрХранMixin
} from '../mixins/regenerated/models/i-i-s-postamat16-регистр-хран';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрХранMixin, Validations, {
});

defineProjections(Model);

export default Model;
