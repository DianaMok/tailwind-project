document.addEventListener('DOMContentLoaded', function () {
	// Кнопка-бургер в хедере
	const burgerBtn = document.querySelector('.js-header-menu-btn');

	// Обёртка мобильного меню
	const mobileMenu = document.querySelector('.js-mobile-menu');

	// Кнопка "крестик" внутри мобильного меню
	const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');

	// Функция открытия меню
	function openMobileMenu() {
		if (!mobileMenu) return;
		mobileMenu.classList.add('is-open');
		document.body.classList.add('body--menu-open');
	}

	// Функция закрытия меню
	function closeMobileMenu() {
		if (!mobileMenu) return;
		mobileMenu.classList.remove('is-open');
		document.body.classList.remove('body--menu-open');
	}

	// Клик по бургеру – открыть
	if (burgerBtn) {
		burgerBtn.addEventListener('click', openMobileMenu);
	}

	// Клик по крестику – закрыть
	if (mobileMenuCloseBtn) {
		mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
	}

	const closeTargets = document.querySelectorAll('.js-mobile-menu-close');

	closeTargets.forEach(el => {
		el.addEventListener('click', event => {
			// если кликнули по самому фону - ок
			// если по контенту – пусть не всплывает (по желанию)
			if (el.classList.contains('mobile-menu__cover') && event.target !== el) {
				return; // кликнули внутрь контента, не закрываем
			}
			closeMobileMenu();
		});
	});

	// Дополнительно: закрывать по ESC
	document.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			closeMobileMenu();
		}
	});

	// tabs
	const questionList = document.querySelector('.js-question-list');
	// Если блок существует — запускаем аккордеон
	if (questionList) {
		const items = questionList.querySelectorAll('.question-item');

		// При загрузке: если какой-то уже открыт (is-open) — задаём высоту body
		items.forEach(item => {
			const body = item.querySelector('.question-item__body');
			if (item.classList.contains('is-open') && body) {
				body.style.maxHeight = body.scrollHeight + 'px';
			}
		});

		items.forEach(item => {
			const head = item.querySelector('.question-item__head');
			const body = item.querySelector('.question-item__body');
			if (!head || !body) return;

			head.addEventListener('click', () => {
				const isOpenNow = item.classList.contains('is-open');

				// 1. Закрыть все остальные
				items.forEach(other => {
					if (other === item) return;
					closeItem(other);
				});

				// 2. Переключить текущий
				if (isOpenNow) {
					closeItem(item);
				} else {
					openItem(item);
				}
			});
		});
	}

	function openItem(item) {
		const body = item.querySelector('.question-item__body');
		if (!body) return;

		item.classList.add('is-open');
		body.style.maxHeight = body.scrollHeight + 'px';
	}

	function closeItem(item) {
		const body = item.querySelector('.question-item__body');
		if (!body) return;

		item.classList.remove('is-open');
		body.style.maxHeight = null;
	}
});
