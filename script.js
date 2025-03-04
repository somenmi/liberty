// ID Vk mini app
document.addEventListener('DOMContentLoaded', function() {
  VK.init({
    apiId: 53126592,
    onlyWidgets: true
  });
});

// Пример данных, которые могут быть получены от сервера или API
const infoData = {
    title: "Информация о приложении",
    description: "Это простое мини-приложение для VK, которое отображает информацию на странице."
};

// Обновляем текст на странице
document.getElementById('info-text').textContent = infoData.description;

// -------------- Появление Ичезновение
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
}

// -------------- ТОЛЬКО ПО ГРАДИЕНТУ, чтобы появлялапсь только при скроле
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
