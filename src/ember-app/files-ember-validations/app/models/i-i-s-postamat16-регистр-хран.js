import {
  defineNamespace,
  defineProjections,
  Model as РегистрХранMixin
} from '../mixins/regenerated/models/i-i-s-postamat16-регистр-хран';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрХранMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
