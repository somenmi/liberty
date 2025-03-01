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

// Скрипт по плавному исчезновению и т.д.
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
