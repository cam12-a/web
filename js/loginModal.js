// полифилл CustomEven для IE11
    (function () {
      if (typeof window.CustomEvent === "function") return false;
      function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
      window.CustomEvent = CustomEvent;
    })();

    $modal = function (options) {
      var
        _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

      function _createModal(options) {
        var
          elemModal = document.createElement('div'),
          modalTemplate = '<div class="modal__backdrop" data-dismiss="modal">'+
          '<div class="modal__content"><div class="modal__header">'+
          '<div class="modal__title" data-modal="title">{{title}}</div>'+
          '<div class="authentification">'+
          '<span class="modal__sigin" style="margin-left:10px;">Войти</span>'+
          '<span class="modal__sigup">Регистрация</span>'+
          '</div>'+
          '<span class="modal__btn-close" data-dismiss="modal" title="Закрыть">x</span></div>'+
          '<div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
          modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
          modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
          modalHTML='<div>'+
          '<div class="show__siginHTML">'+
          '<form method="POST">'+
          '<label for="firstName">Фамилия</label>'+
          '<input type="text" name="firstName">'+
          '<label for="firstName">Имя</label>'+
          '<input type="text" name="name">'+
          '<label for="firstName">Отчество</label>'+
          '<input type="text" name="lastName">'+
          '<label for="firstName">Дата Рождения</label>'+
          '<input type="date" name="dateBirth">'+
          '<label for="firstName">Почта</label>'
          '<input type="email" name="email">'+
          '<label for="firstName">Пароль</label>'+
          '<input type="password" name="pwd">'+
          '<input type="password" name="pwdConfirm">'+
          '</form>'+
          '</div>'+
          '<div class="show__sigupHTML">'+
          '<form method="POST">'+

          '</form>'+
          '</div>'+
          '</div>',
          modalFooterHTML = '';

        elemModal.classList.add('modal');
        modalHTML = modalTemplate.replace('{{title}}', options.title || 'Новое окно');
        modalHTML = modalHTML.replace('{{content}}', options.content || "");
        if (options.footerButtons) {
          for (var i = 0, length = options.footerButtons.length; i < length; i++) {
            var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
            modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
            modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
            modalFooterHTML += modalFooterButton;
          }
          modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
        }
        modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
      }
      
      function _showModal() {
        if (!_destroyed && !_hiding) {
          _elemModal.classList.add('modal__show');
          document.dispatchEvent(_eventShowModal);
        }
      }

      function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove('modal__show');
        _elemModal.classList.add('modal__hiding');
        setTimeout(function () {
          _elemModal.classList.remove('modal__hiding');
          _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
      }

      function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === 'modal') {
          _hideModal();
        }
      }

      _elemModal = _createModal(options || {});


      _elemModal.addEventListener('click', _handlerCloseModal);
      _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
      _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

      return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
          _elemModal.parentElement.removeChild(_elemModal),
            _elemModal.removeEventListener('click', _handlerCloseModal),
            destroyed = true;
        },
        setContent: function (html) {
          _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
          _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        }
      }
    };

    (function () {
      // создаём модальное окно
      var modal = $modal();
      // при клике по кнопке #show-modal
      document.querySelector('#show-modal').addEventListener('click', function (e) {
        // отобразим модальное окно
        modal.show();
      });
    })();