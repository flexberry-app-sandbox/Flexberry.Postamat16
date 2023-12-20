import { Serializer as УведомлениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat16-уведомление';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УведомлениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
