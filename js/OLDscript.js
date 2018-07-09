function FixMenu() {
    var parentElem = document.body;
    var ulMenu = document.getElementById('menu');
    var liMenu = document.getElementsByClassName('menu-item');
    var titleStore = document.getElementById('title');
    var adv = document.querySelector('.adv');
    var column = document.querySelector('.column');
    var promptAsk = document.querySelector('.prompt');
    var mainFunctions = document.querySelector('.main-functions');
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
    this.getBtnOpenstore = function () {
        var getBtn = document.getElementById('open-btn');

    }
    this.getDivLeftMenu = function () {
        var getDivNameValue = parentElem.getElementsByClassName('name-value');
        console.log(getDivNameValue);
        var getDivBudgetValue = parentElem.getElementsByClassName('budget-value');
        console.log(getDivBudgetValue);
        var getDivGoodsValue = parentElem.getElementsByClassName('goods-value');
        console.log(getDivGoodsValue);
        var getDivItemsValue = parentElem.getElementsByClassName('items-value');
        console.log(getDivItemsValue);
        var getDivEmployersValue = parentElem.getElementsByClassName('employers-value');
        console.log(getDivEmployersValue);
        var getDivDiscountValue = parentElem.getElementsByClassName('discount-value');
        console.log(getDivDiscountValue);
        var getDivIsopenValue = parentElem.getElementsByClassName('isopen-value');
        console.log(getDivIsopenValue);
    };

    this.getInputGoods = function () {
        var getInputs = document.getElementsByClassName('goods-item');
        for (var key in getInputs) {
            console.log(getInputs[key]);
        }
    };

    this.getBtnTag = function () {
        var getBtn = mainFunctions.getElementsByTagName('button');
        for (var key in getBtn) {
            console.log(getBtn[key]);
        }
    };
    this.getGoodsTimeBudget = function () {
        var getGoods = document.querySelector('.choose-item');
        console.log(getGoods);
        var getTime = document.querySelector('.time-value');
        console.log(getTime);
        var getBudget = document.querySelector('.count-budget-btn');
        console.log(getBudget);
    };
    this.getInputsEmployers = function () {
    var getEmployers = document.querySelectorAll('.hire-employers-item');
        for (i=0; i < getEmployers.length; i++)
        {
            console.log(getEmployers[i]);
        }
    };
}


var res = new FixMenu();
res.replaceLiMenu();
res.addLiMenu();
res.changeBgBody();
res.changeTitle();
res.removeAdv();
res.askUser();
res.getBtnOpenstore();
res.getDivLeftMenu();
res.getInputGoods();
res.getBtnTag();
res.getGoodsTimeBudget();
res.getInputsEmployers();
console.log(res.getGoodsTimeBudget());
