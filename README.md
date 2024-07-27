# Домашнє завдання №10

+ Створи репозиторій `js-hw-10`.
+ Збери проєкт за допомогою [Vite](https://vitejs.dev/). Ми підготували для тебе [готову збірку](https://github.com/goitacademy/vanilla-app-template) з усіма додатковими налаштуваннями проєкту та рекомендуємо використовувати саме її.
+ Прочитай завдання і виконай його в редакторі коду.
+ Переконайся, що код відформатований за допомогою `Prettier`, а в консолі відсутні помилки й попередження під час відкриття живої сторінки завдання.
+ Здай домашнє завдання на перевірку.

**Формат здачі:** Домашня робота містить два посилання: на вихідні файли і робочу сторінку на `GitHub Pages`.

## Файли і папки

Структура папок і файлів проєкту в папці `src` має виглядати таким чином:

![Files and folders](./assets/folder-structure.jpeg "Folder Structure") 

- Файли розмітки компонентів сторінки повинні лежати в папці `src` та  імпортуватись до файлу `index.html`. 
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів сторінок. Наприклад, для `index.html` файл стилів називається `styles.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

**Завдання 1 - Таймер зворотного відліку**

Виконуй це завдання у файлах `1-timer.html` і `1-timer.js`. Напиши скрипт таймера, який здійснює зворотний відлік до певної дати. Такий таймер може використовуватися у блогах, інтернет-магазинах, сторінках реєстрації подій, під час технічного обслуговування тощо. Подивися демо-відео роботи таймера.

<!-- <video width="" height="auto" src="https://goitlmsstorage.b-cdn.net/76df8282-68ae-497d-b6f9-31419fc40570127672390-2a51efe1-06fb-41dd-86dd-8542393d3043.mp4" preload="auto" controls></video> -->

https://goitlmsstorage.b-cdn.net/76df8282-68ae-497d-b6f9-31419fc40570127672390-2a51efe1-06fb-41dd-86dd-8542393d3043.mp4

**Елементи інтерфейсу**

Додай в HTML файл розмітку таймера, поля вибору кінцевої дати і кнопку, при кліку на яку таймер повинен запускатися. Додай оформлення елементів інтерфейсу згідно з макетом.

```html 
<input type="text" id="datetime-picker"/>
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```
**Бібліотека flatpickr**

Використовуй бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу. Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт, крім того, що описаний в документації.

```JavaScript
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
```

Бібліотека очікує, що її ініціалізують на елементі `input[type="text"]`, тому ми додали до HTML документа поле `input#datetime-picker`.

```html
<input type="text" id="datetime-picker"/>
```

Другим аргументом функції `flatpickr(selector, options)` можна передати необов'язковий об'єкт параметрів. Ми підготували для тебе об'єкт, який потрібен для виконання завдання. Розберися, за що відповідає кожна властивість у [документації «Options»](https://flatpickr.js.org/options/) і використовуй його у своєму коді.

```JavaScript
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
```

**Вибір дати**

Метод `onClose()` з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює `flatpickr`. Саме в ньому варто обробляти дату, обрану користувачем. Параметр `selectedDates` — це масив обраних дат, тому ми беремо перший елемент `selectedDates[0]`.

Тобі ця обрана дата буде потрібна в коді і поза межами цього методу `onClose()`. Тому оголоси поза межами методу `let` змінну, наприклад, `userSelectedDate`, і після валідації її в методі `onClose()` на минуле/майбутнє запиши обрану дату в цю `let` змінну.

+ Якщо користувач вибрав дату в минулому, покажи `window.alert()` з текстом `"Please choose a date in the future"` і зроби кнопку `«Start»` не активною.
+ Якщо користувач вибрав валідну дату (в майбутньому), кнопка `«Start»` стає активною.
+ Кнопка `«Start»` повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому. Зверни увагу, що при обранні валідної дати, не запуску таймера і обранні потім невалідної дати, кнопка після розблокування має знову стати неактивною.
+ Натисканням на кнопку `«Start»` починається зворотний відлік часу до обраної дати з моменту натискання.

**Відлік часу**

Натисканням на кнопку `«Start»` скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі `xx:xx:xx:xx`.

+ Кількість днів може складатися з більше, ніж двох цифр.
+ Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто залишок часу дорівнює нулю `00:00:00:00`.

<!-- <div style="padding: 10px; background-color: rgb(236, 244, 248); font-weight: 550; border-radius: 16px; line-height: 1.4;">
  <strong>!</strong> Після запуску таймера натисканням кнопки Старт кнопка Старт і інпут стають неактивним, щоб користувач не міг обрати нову дату, поки йде відлік часу. Після зупинки таймера інпут стає активним, щоб користувач міг обрати наступну дату. Кнопка залишається не активною.
</div> -->

> ! Після запуску таймера натисканням кнопки Старт кнопка Старт і інпут стають неактивним, щоб користувач не міг обрати нову дату, поки йде відлік часу. 
> Після зупинки таймера інпут стає активним, щоб користувач міг обрати наступну дату. Кнопка залишається не активною.

<!-- &nbsp;  Невидимий символ для додавання пробілу -->

Для підрахунку значень використовуй готову `функцію convertMs`, де `ms` — різниця між кінцевою і поточною датою в мілісекундах.

```JavaScript
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```

**Форматування часу**

Функція `convertMs()` повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. Зверни увагу, що вона не форматує результат. Тобто якщо залишилося 4 хвилини або будь-якої іншої складової часу, то функція поверне `4`, а не `04`. В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів. Напиши функцію, наприклад `addLeadingZero(value)`, яка використовує метод рядка [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) і перед відмальовуванням інтерфейсу форматує значення.

**Бібліотека повідомлень**

Для відображення повідомлень користувачеві, замість `window.alert()`, використовуй бібліотеку [iziToast](https://izitoast.marcelodolza.com/). Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт, крім того, що описаний у документації.

```JavaScript
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
```

**На що буде звертати увагу ментор при перевірці:**

+ Підключені бібліотеки `flatpickr` та `iziToast`.
+ При першому завантаженні сторінки кнопка Start не активна.
+ При кліку на інпут відкривається календар, де можна вибрати дату.
+ При обранні дати з минулого, кнопка Start стає неактивною і з’являється повідомлення з текстом `"Please choose a date in the future"`.
+ При обранні дати з майбутнього кнопка Start стає активною.
+ При натисканні на кнопку Start вона стає неактивною, на сторінку виводиться час, що лишився до обраної дати у форматі `xx:xx:xx:xx`, і запускається зворотний відлік часу до обраної дати.
+ Кожну секунду оновлюється інтерфейс і показує оновлені дані часу, який залишився.
+ Таймер зупиняється, коли доходить до кінцевої дати, тобто залишок часу дорівнює нулю і інтерфейс виглядає так `00:00:00:00`.
+ Час в інтерфейсі відформатований і, якщо воно містить менше двох символів, на початку числа доданий 0.

**Завдання 2 - Генератор промісів**

Виконуй це завдання у файлах `2-snackbar.html` і `2-snackbar.js`. Подивися демо-відео роботи генератора промісів.

<!-- <video width="" height="auto" src="https://goitlmsstorage.b-cdn.net/77d8c684-4c05-4853-a075-e5cacb3275b92023-09-27%2017-11-12.mp4" preload="auto" controls></video> -->

https://goitlmsstorage.b-cdn.net/77d8c684-4c05-4853-a075-e5cacb3275b92023-09-27%2017-11-12.mp4

Додай в HTML файл розмітку форми. Форма складається з поля вводу для введення значення затримки в мілісекундах, двох радіокнопок, які визначають те, як виконається проміс, і кнопки з типом `submit`, при кліку на яку має створюватися проміс.

```html
<form class="form">
  <label>
    Delay (ms)
    <input type="number" name="delay" required/>
  </label>

  <fieldset>
    <legend>State</legend>
    <label>
      <input type="radio" name="state" value="fulfilled" required/>
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required/>
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>
</form>
```

Напиши скрипт, який після сабміту форми створює проміс. В середині колбека цього промісу через вказану користувачем кількість мілісекунд проміс має виконуватися (при `fulfilled`) або відхилятися (при `rejected`), залежно від обраної опції в радіокнопках. Значенням промісу, яке передається як аргумент у методи `resolve/reject`, має бути значення затримки в мілісекундах.

Створений проміс треба опрацювати у відповідних для вдалого/невдалого виконання методах.

Якщо проміс виконується вдало, виводь у консоль наступний рядок, де `delay` — це значення затримки виклику промісу в мілісекундах.

```JavaScript
`✅ Fulfilled promise in ${delay}ms`
```

Якщо проміс буде відхилено, то виводь у консоль наступний рядок, де `delay` — це значення затримки промісу в мілісекундах.

```JavaScript
`❌ Rejected promise in ${delay}ms`
```

**Бібліотека повідомлень**

Для відображення повідомлень, замість `console.log()`, використовуй бібліотеку [iziToast](https://izitoast.marcelodolza.com/). Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт, крім того, що описаний у документації.

```JavaScript
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
```

**На що буде звертати увагу ментор при перевірці:**

+ Підключена бібліотека iziToast.
+ При обранні стану в радіокнопках і натисканні на кнопку Create notification з’являється повідомлення, відповідного до обраного стану стилю, із затримкою в кількість мілісекунд, переданих в інпут.
+ Повідомлення, що виводиться, містить тип обраного стейту і кількість мілісекунд згідно з шаблоном в умові.

# Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисни на кнопку `«Use this template»` і
обери опцію `«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисни
кнопку `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` обери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно
для автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним, як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби коміти та відправляй
їх на GitHub.

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:3000/](http://localhost:3000/). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту. 
   Даний Port вказаний в налаштуваннях файла конфігурації `vite.config.js`.
   Можна прибрати в налаштуваннях вказаний Port, тоді адреса за замовчуванням для локального сервера під час розробки [http://localhost:5173](http://localhost:5173).

## Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` змінити значення прапора `--base=/<REPO>/`, для команди `build`,
замінивши `<REPO>` на назву свого репозиторію, та відправити зміни на GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною на вкладці `Settings` > `Pages` в налаштуваннях репозиторію.
Наприклад, ось посилання на живу версію для цього репозиторію

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Швидше за все у тебе неправильне значення прапора `--base` для
команди `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.
