// Слайдер отзывов
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

showTestimonial(currentTestimonial);

// Темный режим
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '10px';
darkModeToggle.style.right = '10px';
darkModeToggle.style.padding = '0.5rem';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.background = '#ff6f61';
darkModeToggle.style.color = '#fff';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Анимированный счетчик
function animateCounter(element, target, duration) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16)); // 16ms ≈ 60fps
    const interval = setInterval(() => {
        start += step;
        if (start >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = start;
        }
    }, 16);
}

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.createElement('div');
    counterElement.textContent = '0';
    counterElement.classList.add('counter');
    document.querySelector('.hero').appendChild(counterElement);

    animateCounter(counterElement, 150, 2000); // Пример: 150 построенных домов за 2 секунды
});
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
