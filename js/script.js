function FixMenu() {
    var parentElem = document.body;
    var ulMenu = document.getElementById('menu');
    var liMenu = document.getElementsByClassName('menu-item');
    var titleStore = document.getElementById('title');
    var adv = document.querySelector('.adv');
    var column = document.querySelector('.column');
    var promptAsk = document.querySelector('.prompt');
    this.replaceLiMenu = function () {
        return ulMenu.insertBefore(liMenu[2], liMenu[1]);
    };
    this.addLiMenu = function () {
        var createLi = document.createElement('li');
        createLi.classList.add('menu-item');
        createLi.textContent = 'Пятый пункт';
        return ulMenu.appendChild(createLi);
    };
    this.changeBgBody = function () {
        return parentElem.style.backgroundImage = 'url(/img/apple_true.jpg)';
    };
    this.changeTitle = function () {
        return titleStore.innerHTML = ('Мы продаем только подлинную технику Apple');
    };
    this.removeAdv = function () {
        console.log(adv);
        console.log(column);
        return adv.remove();
    };
    this.askUser = function () {
        var question = prompt('Ваше отношение к технике apple?', '');
        return promptAsk.innerHTML = (question);
    };
}

var res = new FixMenu();
res.replaceLiMenu();
res.addLiMenu();
res.changeBgBody();
res.changeTitle();
res.removeAdv();
//res.askUser();
console.log(res.changeBgBody());
