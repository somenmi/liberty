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

// Функция для проверки видимости элемента, то есть про исчезновение страницы
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Функция для обработки скролла, для исчезновение страницы
function handleScroll() {
    const items = document.querySelectorAll('.release-item');
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Добавляем обработчик события скролла, для исчезновение страницы
window.addEventListener('scroll', handleScroll);

// Вызываем handleScroll при загрузке страницы, чтобы проверить видимость элементов, для исчезновение страницы
window.addEventListener('load', handleScroll);

// ТОЛЬКО ПО ГРАДИЕНТУ, чтобы появлялапсь только при скроле
window.addEventListener('scroll', () => {
    const fadeTop = document.querySelector('.fade-top');
    const fadeBottom = document.querySelector('.fade-bottom');
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        fadeTop.style.opacity = 1;
    } else {
        fadeTop.style.opacity = 0;
    }

    if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
        fadeBottom.style.opacity = 1;
    } else {
        fadeBottom.style.opacity = 0;
    }
});
