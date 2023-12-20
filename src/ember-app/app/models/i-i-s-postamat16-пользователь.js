import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПользовательMixin
} from '../mixins/regenerated/models/i-i-s-postamat16-пользователь';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПользовательMixin, Validations, {
});

defineProjections(Model);

export default Model;
