'use strict';

// 1. может принимать ru или eng
let lang = prompt('Введите ru или eng');

if(lang == 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if(lang == 'eng'){
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else{
    console.log('Вводите только  ru или eng');
}

switch(lang){
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'eng':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('Вводите только  ru или eng');
        break;
}


let week = [
    ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    ['monday, tuesday, wednesday, thursday, friday, saturday, sunday']
];
let weekLang = (lang == 'ru') ? console.log(week[0]): console.log(week[1]);


// 2. Артем-директор, Максим-преподаватель, остальные студенты
let namePerson = prompt('Введите имя');
namePerson = namePerson.toLowerCase();
let access = (namePerson == 'артем')? console.log('Директор'):(namePerson == 'максим')? console.log('Преподаватель') : console.log('Студент');