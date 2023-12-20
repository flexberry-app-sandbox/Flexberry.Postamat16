import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat16-логистика', 'Unit | Model | i-i-s-postamat16-логистика', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat16-ключ',
    'model:i-i-s-postamat16-логистика',
    'model:i-i-s-postamat16-пользователь',
    'model:i-i-s-postamat16-постамат',
    'model:i-i-s-postamat16-посылка',
    'model:i-i-s-postamat16-регистр-посылки',
    'model:i-i-s-postamat16-регистр-хран',
    'model:i-i-s-postamat16-служба-доставки',
    'model:i-i-s-postamat16-уведомление',
    'model:i-i-s-postamat16-хранение',
    'model:i-i-s-postamat16-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
