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
});
