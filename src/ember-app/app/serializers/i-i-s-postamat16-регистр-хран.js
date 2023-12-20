import { Serializer as РегистрХранSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat16-регистр-хран';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрХранSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
