class User{
    #password;
    constructor(name, email, password, role = "User"){
        this.name = name;
        this.email = email;
        this._setPassword(password);
        this.role = role;
    }
    setPassword(password){
        if(password.lenght < 6){
            throw new Error("пароль должен быть минимум 6 символов");// выбрасывает(генерирует) ошибку
        }
        this.#password = password;
    }
    checkPassword(password){
        return this.#password === password;
    }
    getRole(){
        return this.role;
    }
}
    class UserManager {
        constructor(){
            this.users = [];
        }
        register(name, email, password, role){
            if(this.users.some(user => user.email === email)){
                throw new Error("Пользователь уже зарегистрирован");
            }
            const newUser = new User(name, email, password, role);
            this.users.push(newUser);
        }
        login(email, password){
            const user = this.users.find(user => user.email === email);
        if(!user) return "Пользователь не найден.";
        return user.checkPassword(password) ? `Добро пожаловать, ${user.name}!
        Роль:${user.getRole}`:"Неверный пароль!";
        }
        deleteUser(email, role){
            if(role !== "Admin"){
                return "Удаление доступно только Админу.";
            }
            const index = this.users.findIndex(user => user.email == email);
            if(index !== -1){
                this.users.splice(index, 1);
                return "Пользователь удален.";
            }
            else{
                return "Пользователь не найден.";
            }
        }
    }
    const userManager = new UserManager();
    document.getElementById("registerForm").addEventListener("submit", function (e){
        e.preventDefault();
        const name = regName.value;
        const email = regEmail.value;
        const password = regPassword.value;
        const role = regRole.value;
        try{
            userManager.register(name, email, password, role);
            output.innerHTML = `Успешная регистрация ${name}`;
        }
        catch(err){
            output.innerHTML = `Ошибка: ${err.message}`;
        }
    });
    document.getElementById("loginForm").addEventListener("submit", function (e){
        e.preventDefault();
        const email = loginEmail.value;
        const password = loginPassword.value;
       const message = userManager.login(email, password);
       output.innerHTML = message;
    });
