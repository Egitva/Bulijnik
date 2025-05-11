const trackbar = document.getElementById('trackbar');
const indicator = document.getElementById('indicator');
const valueDisplay = document.getElementById('value');

let isDragging = false;

function updateIndicatorPosition(clientX) {
    const rect = trackbar.getBoundingClientRect();
    let position = clientX - rect.left;
    
    // Ограничиваем положение в пределах трекбара
    position = Math.max(0, Math.min(position, rect.width));
    
    // Обновляем положение индикатора
    indicator.style.left = position - 10 + 'px';
    
    // Вычисляем процент
    const percent = Math.round((position / rect.width) * 100);
    valueDisplay.textContent = percent;
}

// Обработчики событий для мыши
indicator.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault(); // Предотвращаем выделение текста
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateIndicatorPosition(e.clientX);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Обработчик для клика по трекбару
trackbar.addEventListener('click', (e) => {
    updateIndicatorPosition(e.clientX);
});
const images = [
    'images/Bul-gama-1-1.jpg',
    'images/Flag_of_Kemerovo_Oblast.svg.png',
    'images/ks2.png',
    'images/logo.jpg',
    'images/Внешний_Долг.png'
];

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateGallery() {
    galleryImage.src = images[currentIndex];
    
    // Обновляем состояние кнопок
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

// Инициализация галереи
updateGallery();
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        // Закрываем все элементы
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Открываем/закрываем текущий элемент
        item.classList.toggle('active');
    });
});
const newsList = document.getElementById('newsList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loading = document.getElementById('loading');

// Массив с новостями (в реальном приложении это мог бы быть AJAX-запрос к серверу)
const allNews = [
    { title: 'Новость 1', content: 'Содержание новости 1. Lorem ipsum dolor sit amet.' },
    { title: 'Новость 2', content: 'Содержание новости 2. Consectetur adipiscing elit.' },
    { title: 'Новость 3', content: 'Содержание новости 3. Sed do eiusmod tempor incididunt.' },
    { title: 'Новость 4', content: 'Содержание новости 4. Ut labore et dolore magna aliqua.' },
    { title: 'Новость 5', content: 'Содержание новости 5. Ut enim ad minim veniam.' },
    { title: 'Новость 6', content: 'Содержание новости 6. Quis nostrud exercitation ullamco.' },
    { title: 'Новость 7', content: 'Содержание новости 7. Laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Новость 8', content: 'Содержание новости 8. Duis aute irure dolor in reprehenderit.' },
    { title: 'Новость 9', content: 'Содержание новости 9. In voluptate velit esse cillum dolore.' },
    { title: 'Новость 10', content: 'Содержание новости 10. Eu fugiat nulla pariatur.' }
];

let loadedNews = 0;
const newsPerLoad = 3;

function loadNews() {
    loading.style.display = 'block';
    loadMoreBtn.style.display = 'none';
    
    // Имитация загрузки с сервера
    setTimeout(() => {
        const newsToLoad = allNews.slice(loadedNews, loadedNews + newsPerLoad);
        
        newsToLoad.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            `;
            newsList.appendChild(newsItem);
        });
        
        loadedNews += newsToLoad.length;
        
        // Скрываем кнопку, если новостей больше нет
        if (loadedNews >= allNews.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
        
        loading.style.display = 'none';
    }, 800);
}

// Вариант с бесконечной прокруткой
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        if (loadedNews < allNews.length && loading.style.display === 'none') {
            loadNews();
        }
    }
});

// Инициализация - загружаем первые новости
loadNews();
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const generateBtn = document.getElementById('generateBtn');
const monthYearDisplay = document.getElementById('monthYearDisplay');
const calendarBody = document.getElementById('calendarBody');

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function generateCalendar() {
    const month = parseInt(monthInput.value) - 1; // Месяцы в JS от 0 до 11
    const year = parseInt(yearInput.value);
    
    // Проверка ввода
    if (month < 0 || month > 11 || isNaN(month) || isNaN(year)) {
        alert('Пожалуйста, введите корректные значения месяца (1-12) и года');
        return;
    }
    
    // Обновляем отображение месяца и года
    monthYearDisplay.textContent = `${monthNames[month]}, ${year}`;
    
    // Очищаем календарь
    calendarBody.innerHTML = '';
    
    // Получаем первый день месяца и количество дней в месяце
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Находим день недели первого дня месяца (0 - воскресенье, 1 - понедельник и т.д.)
    let firstDayOfWeek = firstDay.getDay();
    // Преобразуем в наш формат (понедельник - 0)
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    let date = 1;
    let calendarHtml = '';
    
    // Создаем строки календаря
    for (let i = 0; i < 6; i++) {
        // Если мы уже вывели все дни месяца, прерываем цикл
        if (date > daysInMonth) break;
        
        calendarHtml += '<tr>';
        
        // Создаем ячейки для дней недели
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfWeek) {
                // Пустые ячейки перед первым днем месяца
                calendarHtml += '<td class="empty"></td>';
            } else if (date > daysInMonth) {
                // Пустые ячейки после последнего дня месяца
                calendarHtml += '<td class="empty"></td>';
            } else {
                // Ячейки с датами
                calendarHtml += `<td>${date}</td>`;
                date++;
            }
        }
        
        calendarHtml += '</tr>';
    }
    
    calendarBody.innerHTML = calendarHtml;
}

// Инициализация календаря при загрузке
generateCalendar();

// Обработчик кнопки
generateBtn.addEventListener('click', generateCalendar);