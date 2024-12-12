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
## Базовые коды
### Класс EventEmitter
Реализует паттерн «Наблюдатель» и позволяет подписываться на события или слушать события по шаблону.

### Класс Api 
Отвечает за отправку запросов  и получение ответов от сервера.

### Класс Component
Позволяет работать с классами DOM-элементов.

## Интерфейсы данных
````
// товар
interface IItem{
itemCategory: string;
itemName: string
itemDescription: string;
itemImage:string
itemPrice: number;
}
//корзина
interface ICart{
items: IItems[];
totalCost: number;
}
````
