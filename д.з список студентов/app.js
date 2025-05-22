fetch('./students.json')
.then(response => response.json())
.then(students =>{
    const studentsList = document.getElementById('student-list');
    students.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.textContent = `${student.name},  Возраст: ${student.age}`;
        studentsList.appendChild(studentItem); 
    });
})
.catch(error => {console.error('ошибка при загрузке : ', error)

});