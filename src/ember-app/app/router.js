import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat16-ключ-l');
  this.route('i-i-s-postamat16-ключ-e',
  { path: 'i-i-s-postamat16-ключ-e/:id' });
  this.route('i-i-s-postamat16-ключ-e.new',
  { path: 'i-i-s-postamat16-ключ-e/new' });
  this.route('i-i-s-postamat16-логистика-l');
  this.route('i-i-s-postamat16-логистика-e',
  { path: 'i-i-s-postamat16-логистика-e/:id' });
  this.route('i-i-s-postamat16-логистика-e.new',
  { path: 'i-i-s-postamat16-логистика-e/new' });
  this.route('i-i-s-postamat16-пользователь-l');
  this.route('i-i-s-postamat16-пользователь-e',
  { path: 'i-i-s-postamat16-пользователь-e/:id' });
  this.route('i-i-s-postamat16-пользователь-e.new',
  { path: 'i-i-s-postamat16-пользователь-e/new' });
  this.route('i-i-s-postamat16-постамат-l');
  this.route('i-i-s-postamat16-постамат-e',
  { path: 'i-i-s-postamat16-постамат-e/:id' });
  this.route('i-i-s-postamat16-постамат-e.new',
  { path: 'i-i-s-postamat16-постамат-e/new' });
  this.route('i-i-s-postamat16-посылка-l');
  this.route('i-i-s-postamat16-посылка-e',
  { path: 'i-i-s-postamat16-посылка-e/:id' });
  this.route('i-i-s-postamat16-посылка-e.new',
  { path: 'i-i-s-postamat16-посылка-e/new' });
  this.route('i-i-s-postamat16-служба-доставки-l');
  this.route('i-i-s-postamat16-служба-доставки-e',
  { path: 'i-i-s-postamat16-служба-доставки-e/:id' });
  this.route('i-i-s-postamat16-служба-доставки-e.new',
  { path: 'i-i-s-postamat16-служба-доставки-e/new' });
  this.route('i-i-s-postamat16-уведомление-l');
  this.route('i-i-s-postamat16-уведомление-e',
  { path: 'i-i-s-postamat16-уведомление-e/:id' });
  this.route('i-i-s-postamat16-уведомление-e.new',
  { path: 'i-i-s-postamat16-уведомление-e/new' });
  this.route('i-i-s-postamat16-хранение-l');
  this.route('i-i-s-postamat16-хранение-e',
  { path: 'i-i-s-postamat16-хранение-e/:id' });
  this.route('i-i-s-postamat16-хранение-e.new',
  { path: 'i-i-s-postamat16-хранение-e/new' });
  this.route('i-i-s-postamat16-ячейка-l');
  this.route('i-i-s-postamat16-ячейка-e',
  { path: 'i-i-s-postamat16-ячейка-e/:id' });
  this.route('i-i-s-postamat16-ячейка-e.new',
  { path: 'i-i-s-postamat16-ячейка-e/new' });
});

export default Router;
