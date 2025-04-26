// Задание 1:
// Счётчик кликов по кнопке (начальный уровень) 
// Тематика: 
// трекер пользовательских действий З
// Задание: 
// Создайте страницу с кнопкой. При каждом нажатии на кнопку число (счётчик) 
// должно увеличиваться на 1. 
// Требования: 
// ● Использовать getElementById, textContent. 
// ● Не использовать глобальные переменные. 
// ● Счётчик должен отображаться рядом с кнопкой.
let count = 0;
document.getElementById("start").addEventListener("click",()=>{
    count++;
    document.getElementById("counter").textContent = count;
});

// Задание 2: 
// Генератор заметок (средний уровень) 
// Тематика: 
// заметки / быстрые записи 
// Задание: 
// Сделайте поле для ввода и кнопку "Добавить". 
// При нажатии текст из поля добавляется в виде нового параграфа под формой.
// После добавления текст должен исчезать из input. 
// Требования: 
// ● Использовать createElement, appendChild, textContent, value. 
// ● Каждый добавленный параграф должен появляться внизу. 
// ● Использовать querySelector. 
const inputText = document.querySelector("#inputText");
const add = document.querySelector("#add");
const conteiner = document.querySelector("#conteiner");


    textForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const Text = inputText.value;
    const newP = document.createElement("div");
    newP.textContent = Text;
    conteiner.appendChild(newP);
    inputText.value='';
    });
   
    
// Задание 3: Удаление задачи из списка (продвинутый уровень) 
// Тематика: 
// простой ToDo-лист 
// Задание:
//  Создайте список задач. У каждой задачи — кнопка "Удалить", которая при нажатии 
// удаляет именно этот элемент из DOM. 
// Требования: 
// ● Использовать createElement, appendChild, remove, addEventListener. 
// ● Каждая задача должна быть обернута в div или li, к которому крепится кнопка удаления. 
// ● Список должен быть динамическим — добавление и удаление элементов. 