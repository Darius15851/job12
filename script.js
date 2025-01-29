// Прелоадер
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Фильтр домов
document.querySelectorAll('.filter-options input').forEach(input => {
    input.addEventListener('change', filterHouses);
});

function filterHouses() {
    const filters = Array.from(document.querySelectorAll('.filter-options input:checked'))
        .map(input => ({ type: input.dataset.filter, value: input.value }));

    document.querySelectorAll('.house-card').forEach(card => {
        let show = true;
        filters.forEach(filter => {
            if (filter.type === 'price' && card.dataset.price > filter.value) show = false;
            if (filter.type === 'rooms' && card.dataset.rooms !== filter.value) show = false;
        });
        card.style.display = show ? 'block' : 'none';
    });
}

// Рейтинг домов
document.querySelectorAll('.rating .star').forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.dataset.value;
        star.parentElement.querySelectorAll('.star').forEach(s => {
            s.style.color = s.dataset.value <= rating ? '#ff6f61' : '#ccc';
        });
    });
});

// Чат-бот
document.querySelector('.chat-bot-toggle').addEventListener('click', () => {
    document.querySelector('.chat-bot-window').classList.toggle('hidden');
});
