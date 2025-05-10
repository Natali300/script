// Задание 1 
// Создайте поле для ввода email, сохраняйте его в cookie и при повторной загрузке 
// автозаполняйте поле. 
// Задание 2 
// Реализуйте кнопку "Забыть имя", которая удаляет cookie с именем пользователя. 
// Задание 3 
// Сделайте небольшое текстовое поле с комментарием. Сохраняйте его в cookie при каждом вводе. 
// При перезагрузке восстанавливайте.

// Функция для установки куки
        function setCookie(name, value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Устанавливаем срок действия
            const expires = "expires=" + d.toUTCString();
            document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
        }

        // Функция для получения куки
        function getCookie(name) {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const parts = cookies[i].trim().split("=");
                if (parts[0] === name) {
                    return decodeURIComponent(parts[1]);
                }
            }
            return null;
        }

        // Функция для отображения сохраненных данных
        function showSavedData() {
            const email = getCookie("email");
            const comment = getCookie("comment");

            if (email) {
                document.getElementById("emailInput").value = email;
            }

            if (comment) {
                document.getElementById("commentInput").value = comment;
            }
        }

        // Сохраняем email в куки
        function saveEmail() {
            const email = document.getElementById("emailInput").value;
            setCookie("email", email, 7); // Сохраняем на 7 дней
        }

        // Удаляем куку с именем пользователя
        function deleteName() {
            setCookie("email", "", -1); // Удаляем куку
            document.getElementById("emailInput").value = ""; // Очищаем поле
        }

        // Сохраняем комментарий в куки при вводе
        function saveComment() {
            const comment = document.getElementById("commentInput").value;
            setCookie("comment", comment, 7); // Сохраняем на 7 дней
        }

        // Устанавливаем обработчики событий при загрузке
        window.onload = function() {
            showSavedData();
            document.getElementById("commentInput").addEventListener("input", saveComment);
        };