import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-postamat16-хранение-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-postamat16-регистр-посылки+посылка':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номер',
            required: true,
            relationName: 'посылка',
            projection: 'ПосылкаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
