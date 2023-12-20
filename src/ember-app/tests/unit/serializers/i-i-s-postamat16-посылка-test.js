import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat16-посылка', 'Unit | Serializer | i-i-s-postamat16-посылка', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat16-посылка',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat16-состояние',
    'transform:i-i-s-postamat16-статус',
    'transform:i-i-s-postamat16-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
