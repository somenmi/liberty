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
