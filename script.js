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

// Плейлист ВК его стилизация
document.addEventListener('DOMContentLoaded', function() {
    // Ждем, пока iframe загрузится
    const checkIframe = setInterval(() => {
        const iframe = document.querySelector('.vk-playlist-container iframe');
        if (iframe) {
            clearInterval(checkIframe); // Останавливаем проверку

            // Изменяем стили iframe
            iframe.style.backgroundColor = '#242424'; // Фон iframe
            iframe.style.border = 'none'; // Убираем границу
        }
    }, 100); // Проверяем каждые 100 мс
});

// Обновляем текст на странице
// мб пригодится потом - document.getElementById('info-text').textContent = infoData.description;
