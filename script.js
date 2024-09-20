// //Завдання 1

// // Оригінальна функція, яка повертає Promise.
// function fetchFakeData() {
//   const fakeData = {
//     name: "John",
//     age: 30,
//   };
//   return Promise.resolve(fakeData);
// }

// // Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
// async function getData() {
//   // Використовуємо try для обробки помилок
//   try {
//     // Використовуємо await для очікування виконання Promise.
//     const data = await fetchFakeData();
//     // Дані виводимо в консоль після отримання їх з Promise.
//     console.log("Отримані дані:", data);
//   } catch (error) {
//     // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
//     console.error("Сталася помилка:", error);
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
// getData();

// //Завдання 2
// // Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
// function getRandomNumberAfterSeconds(seconds) {
//   // Повертаємо новий Promise
//   return new Promise((resolve) => {
//     // Використовуємо setTimeout для симуляції асинхронної операції.
//     // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
//     setTimeout(() => {
//       resolve(Math.random());
//     }, seconds * 1000);
//   });
// }

// // Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
// async function logRandomNumberAfterSeconds(seconds) {
//   // Використовуємо try для обробки помилок
//   try {
//     // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
//     const randomNumber = await getRandomNumberAfterSeconds(seconds);
//     // Виводимо отримане випадкове число в консоль
//     console.log("Отримане випадкове число:", randomNumber);
//   } catch (error) {
//     // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
//     console.error("Сталася помилка:", error);
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 2 ==============================");
// logRandomNumberAfterSeconds();

// //Завдання 3
// // Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// // Використовуємо try для обробки помилок
// // Використовуємо fetch для відправки GET-запиту на вказаний URL

// // Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль

// // Конвертуємо відповідь у формат JSON

// // Виводимо дані в консоль
// // Виводимо помилки в консоль якщо вони є

// // Розкоментуйте після виконання завданння
// // console.log("Завдання: 3 ==============================");
// // getDataFromUrl("https://swapi.dev/api/people/1");
// // Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// async function getDataFromUrl(url) {
//   // Використовуємо try для обробки помилок
//   try {
//     // Використовуємо fetch для відправки GET-запиту на вказаний URL
//     const response = await fetch(url);
//     // Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль
//     if (!response.ok) {
//       throw new Error(`Помилка: ${response.status} - ${response.statusText}`);
//     }
//     // Конвертуємо відповідь у формат JSON
//     const data = await response.json();
//     // Виводимо дані в консоль
//     console.log("Отримані дані:", data);
//   } catch (error) {
//     // Виводимо помилки в консоль якщо вони є
//     console.error("Сталася помилка:", error.message);
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 3 ==============================");
// getDataFromUrl("https://swapi.dev/api/people/1");

// //Завдання 4
// // Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// async function postDataWithAuth(url, data, authToken) {
//   // Використовуємо try для обробки помилок
//   try {
//     // Використовуємо fetch для відправки POST-запиту на вказаний URL
//     const response = await fetch(url, {
//       // Вказуємо метод запиту POST в конфігурацію параметрів запиту
//       method: "POST",
//       // Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"
//       headers: {
//         "Content-Type": "application/json",
//         // Вказуємо заголовок Authorization в який передаємо authToken
//         Authorization: `Bearer ${authToken}`,
//       },
//       // Передаємо дані data в body, які перед цим перетворились в JSON
//       body: JSON.stringify(data),
//     });
//     // Перевіряємо через властивість ok, чи є відповідь вдалою
//     if (!response.ok) {
//       throw new Error(`Помилка: ${response.status} - ${response.statusText}`);
//     }
//     // Конвертуємо відповідь у формат JSON
//     const result = await response.json();
//     // Виводимо відповідь в консоль
//     console.log("Отримана відповідь:", result);
//   } catch (error) {
//     // Виводимо помилки в консоль якщо вони є
//     console.error("Сталася помилка:", error.message);
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 4 ==============================");
// postDataWithAuth(
//   "https://petstore.swagger.io/v2/store/order",
//   {
//     id: 0,
//     petId: 0,
//     quantity: 0,
//     shipDate: "2023-07-23T19:28:06.229Z",
//     status: "placed",
//     complete: true,
//   },
//   "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
// );

// //Завдання 5
// // Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// async function* asyncGenerator() {
//   // "async function*" означає, що це асинхронний генератор.
//   let i = 0;
//   // Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
//   while (true) {
//     // Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     // Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
//     // Віддаємо значення лічильника та збільшуємо його на один
//     yield i++;
//   }
// }

// // Використовуємо асинхронний генератор та записуємо його значення в константу gen
// const gen = asyncGenerator();

// // Створюємо асинхрону функцію printFiveItems
// async function printFiveItems() {
//   let count = 0;
//   // Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
//   for await (let value of gen) {
//     // Перебираємо значення gen
//     // Виводимо в консоль поточне значення
//     console.log(value);
//     count++;
//     // Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
//     if (count === 5) {
//       break;
//     }
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 5 ==============================");
// printFiveItems();

// //Завдання 6

// // Функція, яка симулює витягування даних з бази даних
// async function getDataFromDB() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Дані з бази даних");
//     }, 1000);
//   });
// }

// // Функція, яка симулює отримання даних з API
// async function getDataFromAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Дані з API");
//     }, 800);
//   });
// }

// // Функція, яка симулює отримання даних з кешу
// async function getDataFromCache() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Дані з кешу");
//     }, 600);
//   });
// }

// // Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
// async function* gatherData() {
//   try {
//     // Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
//     // Використовуємо try для обробки помилок
//     const dbData = await getDataFromDB();
//     // Результат роботи функції зберігаємо у змінну dbData

//     // yield використовується для того, щоб повернути значення dbData
//     yield dbData;

//     // Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData
//     const apiData = await getDataFromAPI();
//     yield apiData;

//     // І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
//     const cacheData = await getDataFromCache();
//     yield cacheData;
//   } catch (error) {
//     // Виводимо помилки в консоль якщо вони є
//     console.error("Сталася помилка:", error.message);
//   }
// }

// // Створюємо асинхрону функцію displayData
// async function displayData() {
//   // Створюємо екземпляр генератора gatherData
//   const generator = gatherData();

//   // Три рази виводимо поточне значення генератора в консоль
//   for await (let value of generator) {
//     console.log(value);
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 6 ==============================");

// displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
function* countdownGenerator(start) {
  // Ініціюємо лічильник змінну count зі стартовим значенням параметра start
  let count = start;

  // Цикл, що триває доки лічильник більший або рівний 0
  while (count >= 0) {
    // Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
    yield count;

    // Зменшуємо лічильник на 1
    count--;
  }
}

console.log("Завдання: 7 ==============================");
// Створюємо екземпляр генератора countdown з лічильниковм 5
const countdown = countdownGenerator(5);
let nextValue = countdown.next();
// Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
while (!nextValue.done) {
  // Виводимо поточне значення
  console.log(nextValue.value);

  // Отримуємо наступне значення з генератора
  nextValue = countdown.next();
}
