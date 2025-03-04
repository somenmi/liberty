// ID Vk mini app
document.addEventListener('DOMContentLoaded', function() {
  VK.init({
    apiId: 53126592,
    onlyWidgets: true
  });
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

// Проверка виджета, если не загрузился убирает его
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('vk_playlist_-215851005_13');

    // Проверяем, загрузился ли iframe
    const checkIframe = setInterval(() => {
        const iframe = container.querySelector('iframe');

        if (iframe) {
            clearInterval(checkIframe); // Останавливаем проверку

            // Добавляем обработчик ошибок для iframe
            iframe.onerror = () => {
                container.style.display = 'none'; // Скрываем контейнер при ошибке
            };

            // Проверяем, загрузился ли контент iframe
            iframe.onload = () => {
                if (!iframe.contentWindow || !iframe.contentWindow.document.body.innerHTML.trim()) {
                    container.style.display = 'none'; // Скрываем контейнер, если iframe пустой
                }
            };
        }
    }, 100); // Проверяем каждые 100 мс

    // Если iframe не создается в течение 5 секунд, скрываем контейнер
    setTimeout(() => {
        if (!container.querySelector('iframe')) {
            container.style.display = 'none'; // Скрываем контейнер
        }
    }, 5000); // Таймаут 5 секунд
});

// Обновляем текст на странице
// мб пригодится потом - document.getElementById('info-text').textContent = infoData.description;
