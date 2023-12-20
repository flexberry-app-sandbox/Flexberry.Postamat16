import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



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

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
