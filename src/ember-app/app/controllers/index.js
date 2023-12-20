import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.посылка.caption'),
          title: i18n.t('forms.application.sitemap.посылка.title'),
          children: [{
            link: 'i-i-s-postamat16-посылка-l',
            caption: i18n.t('forms.application.sitemap.посылка.i-i-s-postamat16-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.посылка.i-i-s-postamat16-посылка-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.пользователь.caption'),
          title: i18n.t('forms.application.sitemap.пользователь.title'),
          children: [{
            link: 'i-i-s-postamat16-пользователь-l',
            caption: i18n.t('forms.application.sitemap.пользователь.i-i-s-postamat16-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователь.i-i-s-postamat16-пользователь-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.уведомление.caption'),
          title: i18n.t('forms.application.sitemap.уведомление.title'),
          children: [{
            link: 'i-i-s-postamat16-уведомление-l',
            caption: i18n.t('forms.application.sitemap.уведомление.i-i-s-postamat16-уведомление-l.caption'),
            title: i18n.t('forms.application.sitemap.уведомление.i-i-s-postamat16-уведомление-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postamat16-ключ-l',
            caption: i18n.t('forms.application.sitemap.уведомление.i-i-s-postamat16-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.уведомление.i-i-s-postamat16-ключ-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.постамат.caption'),
          title: i18n.t('forms.application.sitemap.постамат.title'),
          children: [{
            link: 'i-i-s-postamat16-ячейка-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat16-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat16-ячейка-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat16-постамат-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat16-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat16-постамат-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.служба-доставки-логистика.caption'),
          title: i18n.t('forms.application.sitemap.служба-доставки-логистика.title'),
          children: [{
            link: 'i-i-s-postamat16-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.служба-доставки-логистика.i-i-s-postamat16-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.служба-доставки-логистика.i-i-s-postamat16-служба-доставки-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-postamat16-логистика-l',
            caption: i18n.t('forms.application.sitemap.служба-доставки-логистика.i-i-s-postamat16-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.служба-доставки-логистика.i-i-s-postamat16-логистика-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.хранение.caption'),
          title: i18n.t('forms.application.sitemap.хранение.title'),
          children: [{
            link: 'i-i-s-postamat16-хранение-l',
            caption: i18n.t('forms.application.sitemap.хранение.i-i-s-postamat16-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.хранение.i-i-s-postamat16-хранение-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})