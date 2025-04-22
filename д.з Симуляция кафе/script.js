// Задание 2: Симуляция кафе: клиенты и заказы 
// Описание: Создайте модель кафе с клиентами и заказами. 
// Каждый клиент может делать заказы, и они сохраняются. 
// 🔧 Требования: 
// 1. Класс MenuItem 
// ○ Свойства: name, price 
// 2. Класс Order 
// ○ Свойства: items (массив MenuItem), isPaid (по умолчанию false) 
// ○ Метод getTotalPrice() — сумма всех цен 
// ○ Метод pay() — переводит isPaid в true 
// 3. Класс Client ○ Свойства: name, orders (массив Order) 
// ○ Метод createOrder(items) — создаёт заказ и добавляет в массив 
// ○ Метод getUnpaidOrders() — возвращает список неоплаченных заказов 

class MenuItem{
    constructor(name, price ){
        this.name = name;
        this.price = price;
    }
}
class Order{
    constructor(items){
        this.items = items;
        this.isPaid = false;
    }
    getTotalPrice(){
        return this.items.reduce((summ,item) => summ + item.price, 0)
    }
    pay(){
        this.isPaid = true;
    }
}
class Client{
    constructor(name){
        this.name = name;
        this.orders = [];
    }
    createOrder(items){
        const order = new Order(items) // Создаем новый экземпляр Order с элементами menu
        this.orders.push(order);  // Добавляем новый заказ в массив заказов
    }
    
    getUnpaidOrders(){
        return this.orders.filter(order => !order.isPaid)

    }
}


const menu = [
new MenuItem("капучино ", 200),
new MenuItem("САЛАТ ЦЕЗАРЬ С КУРИЦЕЙ ", 90),
new MenuItem("КУРИНЫЙ КАРМАШЕК ОРИОН ", 250),
new MenuItem("КАРТОФЕЛЬ ЖАРЕНЫЙ С ГРИБАМИ ", 150),
new MenuItem("ЧАЙ ", 50),
new MenuItem("НОРВЕЖСКИЙ СУП  ", 150),
new MenuItem("лате ", 200)];
document.getElementById("MenuItem").addEventListener("click",()=>{
    const show = confirm("показать меню");
    if(show){
        let menuText = " ";
        menu.forEach(items =>{
            menuText =(`${items.name} : ${items.price} рублей\n`);
            alert( menuText); 
        });
    }else{
        alert("приходите ещё");
    }
})
const client =[
     new Client("Света"),
     new Client("Игорь")];

// Клиент 1 создает заказ
client[0].createOrder([menu[0], menu[1]]); 
client[0].createOrder([menu[2]]);

// Клиент 2 создает заказ
client[1].createOrder([menu[3], menu[4]]); 

// Просмотр неоплаченных заказов клиента 1
console.log(client[0].getUnpaidOrders()); 

// Проверка общей суммы первого заказа
const firstOrder = client[0].orders[0];
console.log(`Сумма первого заказа клиента 1: ${firstOrder.getTotalPrice()} рублей`);

// Оплата первого заказа клиента 1
firstOrder.pay();
console.log(`Статус первого заказа клиента 1 после оплаты: ${firstOrder.isPaid}`);


