https://github.com/MarinaKim456/web-larek-frontend.git
# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
# Архитектура приложения
в коде используется паттерн MVP:
- слой для отображения данных,
- слой хранения и изменения данных,
- презентер, связующий слой для отображения и данных.

## Слой данных
### Класс ItemData
Класс отвечает за хранение и логику данных карточки товара.
Методы:
addToCart(itemId): void - добавляет товар в корзину

### Класс CartData
Класс отвечает за хранение и логику данных корзины
Поля:
_items: IItem[] - массив с карточками товаров,
totalPrice: number - общая сумма заказа
Методы;
deleteFromCart(itemId): void - удаление товара из корзины

### Класс IUserData
Класс отвечает за хранение и логику данных пользователя,
Методы:
addPhone(): void - добавить номер телефона,
addEmail(): void - добавить email,
addAddress(): void - добавить адрес доставки,
checkValidation(data: Record<typeof IUserInfo, string>): boolean

## Слой отображения

### Класс Page
Отвечает за отображение комнонентов главной страницы.
Поля:
logo,
cartIcon - иконка корзины,
itemBlock - контейнер для вывода карточек с товарами,

### Класс Item
Отвечает за отображение карточки товара.
Поля:
name,
category,
image,
description,
price.
Методы:
setData(itemData: IItem):void - заполняет атрибуты \
элементов карточки
addToCart() - добавляет товар в массив корзины и \
вызывает событие изменения массива,

### Класс Cart:
Отвечает за отображение корзины.
Поля:
_items: IItem[] - массив с карточками товаров,
totalPrice - общая сумма заказа
Методы;
deleteFromCart() - удаление товара из корзины

### Класс UserInfo:
Отвечает за отображение контактов пользователя.
Поля:
phone: string,
email: string,
address: string.
Методы:
addPhone() - добавить номер телефона,
addEmail() - добавить email,
addAddress() - добавить адрес доставки,
checkValidation(data: Record<typeof IUserInfo, string>)
setUserData(userData: IUser): void - устанавливает данные\
 в элементы разметки формы

### Класс Modal:
Отвечает за отображение модальных окон.
Методы:
openModal,
closeModal.

### Класс Form:
Реализация окна форм.
Методы:
showInputError - показывает текст ошибки,
hideInputError - скрывает  текст ошибки,
close - закрывает форму, при этом очищая поля ввода

### Класс OrderForm:
Реализация окна формы отправки заказа.
Поля: 
cardPay - кнопка оплаты картой,
cashPay - кнопка оплаты наличными,
address - ввод адреса

### Класс ContactsForm:
Реализация окна формы контактов пользователя.
Поля: 
phone: string,
email: string.

## Презентер
EventEmitter выступает в роли Представителя (Presenter) - \
связывает модели данных с отображением интерфейсов при \
сработке какого-нибудь события, управляя взаимодействием между ними.

## Интерфейсы данных
````
// товар
interface IItem{
    id: number;
    description: string;
    image:string;
    title: string
    category: string; 
    price: number;
    addToCart(itemId: number): void;
}

//корзина
interface ICart{
    items: IItem[];
    total: number;
    deleteItem(itemId: number):void;
    makeOrder(): void;
}

//данные покупателя
exrt interface IUser{
    email: string;
    phone: string;
    address: string;
    addEmail(userEmail: string): void;
    addPhone(userPhone: string): void;
    addAddress(): void;
    checkValidation(data: Record<typeof IUserInfo, string>): boolean;
}

//типы данных
type IUserInfo = Pick<IUser, 'email' | 'phone'>;

````
