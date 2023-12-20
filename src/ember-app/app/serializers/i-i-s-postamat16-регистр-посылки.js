import { Serializer as РегистрПосылкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat16-регистр-посылки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрПосылкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
