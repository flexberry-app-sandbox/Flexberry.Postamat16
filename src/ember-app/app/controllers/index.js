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
          caption: i18n.t('forms.application.sitemap.postamat16.caption'),
          title: i18n.t('forms.application.sitemap.postamat16.title'),
          children: [{
            link: 'i-i-s-postamat16-посылка-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-посылка-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat16-ячейка-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-ячейка-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-postamat16-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-пользователь-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-postamat16-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-служба-доставки-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-postamat16-ключ-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-ключ-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-postamat16-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-логистика-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-postamat16-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-хранение-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat16-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-постамат-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-postamat16-уведомление-l',
            caption: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-уведомление-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat16.i-i-s-postamat16-уведомление-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})