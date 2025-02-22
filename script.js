// Пример данных, которые могут быть получены от сервера или API
const infoData = {
    title: "Информация о приложении",
    description: "Это простое мини-приложение для VK, которое отображает информацию на странице."
};

// Обновляем текст на странице
document.getElementById('info-text').textContent = infoData.description;
