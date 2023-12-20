import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  Оформлен: 'Оформлен',
  РазгрузкаВПунктеВыдаче: 'Разгрузка в пункте выдаче',
  СобранНаСкладе: 'Собран на складе',
  ОтправленНаСборку: 'Отправлен на сборку',
  ГотовКВыдачи: 'Готов к выдачи',
  ВПути: 'В пути'
});
