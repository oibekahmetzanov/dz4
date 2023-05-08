

//задание 1 Напишите функцию, которая вернет текст внутри первого тэга -   li
// let dz1 = document.querySelector('li')
// console.log(dz1.textContent);


// // задание 2 Напишите функцию, которая вернет массива с текстами внутри тэгов - li
// let textallli = document.querySelectorAll('li')
// console.log(textallli);
// задание 3 Напишите функцию, которая вернет массива с текстами внутри тэгов   элементов с классом list-item 

// let textli = document.querySelectorAll('.list-item')
// console.log(textli);

// задание 4 Напишите функцию, которая вернет массив   со значениями аттрибута class внутри тэгов элементов с классом list-item
// let classandli = document.querySelector('ul')
// console.log(classandli);

// задание 5. Напишите функцию, которая вернет массива со значениями аттрибута data-test-id  внутри тэгов элементов с классом  list-item.
// Этот аттрибут написан для тестирования программ специальным роботом и по нему этот робот находит нужные элементы. Цель его - дать возможность роботу зацепиться за нужные 

// let ggg = document.querySelectorAll('[data-test-id]')
// let arr = []
// for (let i = 0; i < ggg.length; i++) {
//     arr.push(ggg[i].getAttribute('data-test-id'))
// }
// console.log(arr);


//задание 6

// const bbb = document.querySelectorAll('li');

// for(let i = 0; i < bbb.length; i++){
//     bbb[i].className.includes(bbb[i].textContent) === false ? console.log(bbb[i]) : ''
// }


//задание 7

// let dz = document.querySelectorAll('.list-item');
// let arr = []
// for (let i = 0; i < dz.length; i++){
// arr.push(dz[i].getAttribute('data-test-id'))
// dz[i].textContent = arr[i] + " " + dz[i].textContent
// }


//задание 8 На сайте есть поле для ввода с id = ‘secret-login’.  Ваша задача - изменить его содержимое на You were hacked

// let secretlogin = document.querySelector('#secret-login')
// secretlogin.placeholder = "You were hacked";

