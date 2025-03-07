document.addEventListener('DOMContentLoaded', function() {
    // Инициализация VK Mini App
    VK.init({
        apiId: 53126592,
        onlyWidgets: true
    });

    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    }

    // Функция для обработки скролла
    function handleScroll() {
        const items = document.querySelectorAll('.release-item');
        items.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
                item.classList.remove('unvisible');
            } else {
                item.classList.add('unvisible');
                item.classList.remove('visible');
            }
        });

        // Логика для градиентов
        const fadeTop = document.querySelector('.fade-top');
        const fadeBottom = document.querySelector('.fade-bottom');
        const scrollTop = window.scrollY;
        const scrollBottom = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        // Градиент сверху
        if (scrollTop > 0) {
            fadeTop.style.opacity = 1;
        } else {
            fadeTop.style.opacity = 0;
        }

        // Градиент снизу
        if (scrollBottom < documentHeight) {
            fadeBottom.style.opacity = 1;
        } else {
            fadeBottom.style.opacity = 0;
        }
    }

    // Добавляем обработчик события скролла
    window.addEventListener('scroll', handleScroll);

    // Вызываем handleScroll при загрузке страницы, чтобы проверить видимость элементов
    window.addEventListener('load', handleScroll);

    // Вызываем handleScroll сразу после загрузки страницы
    handleScroll();

    // Скрипт для акцента на центральном элементе
    const releasesGrid = document.getElementById('releases-grid');
    if (releasesGrid) {
        // Функция для акцента на центральном элементе
        function highlightCenterItem() {
            const center = releasesGrid.clientWidth / 2; // Центр контейнера
            const items = releasesGrid.querySelectorAll('.release-item');

            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.left + rect.width / 2; // Центр элемента

                // Если элемент находится в центре
                if (Math.abs(itemCenter - center) < 10) { // 10 - погрешность
                    item.classList.add('center');
                } else {
                    item.classList.remove('center');
                }
            });
        }

        // Обработчик события скролла для акцента
        releasesGrid.addEventListener('scroll', highlightCenterItem);

        // Вызываем highlightCenterItem сразу после загрузки страницы
        highlightCenterItem();
    }

    // Скрипт задержки перехода по ссылке
    const delayedLinks = document.querySelectorAll('.delayed-link');

    delayedLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');

            // Добавляем класс для визуальной обратной связи
            this.classList.add('loading');

            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        });
    });

    const stars = document.querySelectorAll('.star');
    const ratingText = document.querySelector('.rating-text');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            // Убираем активный класс у всех звёзд
            stars.forEach(s => s.classList.remove('active'));

            // Добавляем активный класс выбранным звёздам
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('active');
            }

            // Обновляем текст и его цвет
            ratingText.textContent = `Вы оценили на ${value} из 5`;
            ratingText.style.color = '#ffcc00'; // Цвет текста как у активных звёзд

            // Отправляем оценку на сервер (если нужно)
            sendRatingToServer(value);
        });

        // Подсветка звёзд при наведении
        star.addEventListener('mouseover', function () {
            const value = this.getAttribute('data-value');
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', function () {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });

    // Функция для отправки оценки на сервер
    function sendRatingToServer(rating) {
        VK.Bridge.send('VKWebAppCallAPIMethod', {
            method: 'storage.set', // Пример метода VK API
            params: {
                key: 'user_rating',
                value: rating,
            },
        })
            .then(response => {
                console.log('Оценка сохранена:', response);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }
});
