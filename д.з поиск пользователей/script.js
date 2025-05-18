const studentInput = document.getElementById("student");
const cityInput = document.getElementById("adress.sity");
const sortSelect = document.getElementById("sort");
const studentList = document.getElementById("student-list");
const loading = document.getElementById("loading");
const counter = document.getElementById("counter");

studentInput.addEventListener("input", filterStudents);
cityInput.addEventListener("input", filterStudents);// Добавляем обработчик для поиска по городу
sortSelect.addEventListener("change", filterStudents); // Добавляем обработчик для изменения сортировки

function filterStudents() {
    const nameQuery = studentInput.value.toLowerCase();
    const cityQuery = cityInput.value.toLowerCase();
    loading.style.display = 'block';

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        loading.style.display = 'none';

        // поиск пользователей по имени и городу
        const filtered = users.filter(user => {
            const matchesName = user.name.toLowerCase().includes(nameQuery);
            const matchesCity = user.address.city.toLowerCase().includes(cityQuery);
            return matchesName && matchesCity; 
        });

        // поиск пользователей в соответствии с выбранной опцией
        if (sortSelect.value === "asc") {
            filtered.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
        } else if (sortSelect.value === "desc") {
            filtered.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
        }

        studentList.innerHTML = ''; // Очистка списка перед добавлением новых элементов
        filtered.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            const button = document.createElement('button');
            button.textContent = "подробнее";
            button.addEventListener('click', () => {
                const details = document.createElement('div');
                details.classList.add('details');
                details.innerHTML = `
                Адрес : ${user.address.city}, ${user.address.street}
                Телефон : ${user.phone}
                Сайт : <a href="http://${user.website}" target="_blank">${user.website}</a>`;
                li.appendChild(details);
                button.style.display = 'none'; // Скрыть кнопку после отображения деталей
            });
            li.appendChild(button);
            studentList.appendChild(li); // Добавление пользователя в список
        });

        // Показать количество найденных пользователей
        counter.textContent = 'Найдено пользователей: ' + filtered.length;

        // Если ничего не найдено
        if (filtered.length === 0 && (nameQuery.trim() !== '' || cityQuery.trim() !== '')) {
            studentList.innerHTML = '<li>ничего не найдено</li>';
            counter.textContent = 'Найдено пользователей: 0'; // Обнулить счетчик
        }
    })
    .catch(error => {
        loading.style.display = 'none';
        console.error('ошибка загрузки: ', error);
        studentList.innerHTML = '<li>произошла ошибка при загрузке</li>';
        counter.textContent = 'Найдено пользователей: 0'; // Обнулить счетчик в случае ошибки
    });
}
