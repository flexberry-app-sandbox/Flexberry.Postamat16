import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрПосылкиMixin
} from '../mixins/regenerated/models/i-i-s-postamat16-регистр-посылки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрПосылкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
