// function getWeekDay(date) {
//     var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//
//     return days[date.getDay()];
// }
//
// var date = new Date(2014, 0, 3); // 3 января 2014
// console.log( getWeekDay(date) ); // 'пт'
//
//
// let dateSecond = new Date(2014,0,3);
// let options = {
//    weekday: 'short'
// };
// console.log(dateSecond.toLocaleString("ru", options));


// let btn = document.querySelector(".btn");
//
// function myAnimation() {
//     let elem = document.querySelector(".box"),
//         pos = 0,
//         id = setInterval(frame, 10);
//
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
//
// btn.addEventListener('click', myAnimation);
//
//
// let btns = document.getElementsByTagName("button"),
//     btn_block = document.querySelector(".btn-block");
//
// btn_block.addEventListener("click", function (event) {
//     if (event.target && event.target.tagName == "BUTTON"){
//         console.log("Hello!");
//     }
// });


// let timerId = setTimeout(log, 2000);
//
// function log() {
//     console.log("Hello world!");
//     timerId = setTimeout(log, 2000);
// }

// function makeArmy() {
//
//     var shooters = [];
//
//     for (var i = 0; i < 10; i++) {
//         var shooter = (function(x) {
//
//             return function() {
//                 console.log( x );
//             };
//
//         })(i);
//         shooters.push(shooter);
//     }
//
//     return shooters;
// }
//
// var army = makeArmy();
//
// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...