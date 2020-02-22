var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// empty arrays for location objects 
var home = [];
var locaCity = [];
var restaCity = [];
var eventCity = [];
//creating classes which will be templates for objects
var Home = /** @class */ (function () {
    function Home(name, picture, description, address, zip, createdTime) {
        this.name = name;
        this.picture = picture;
        this.description = description;
        this.address = address;
        this.zip = zip;
        this.createdTime = new Date(createdTime);
    }
    // creates DOM elements
    Home.prototype.build = function () {
        document.querySelector('.content').innerHTML += "\n            <div class=\"col-lg-3 col-md-4 col-sm-6 p-2 mb-4\">\n                <div class = \"h-100 col-lg-12 col-md-12 p-0 bg-light rounded-top border-top border-right border-left\">\n                    <div class = \"text-center p-2\">\n                        " + this.name + "\n                    </div>\n                    <div>\n                        <img src=\"" + this.picture + "\" class=\"img-thumbnail\">\n                    </div>\n                    <div class=\"pl-3 pr-3\">\n                        <span class=\"text-center small\">Info: " + this.description + "</span><br>\n                        <span class=\"text-center small\">Address: " + this.address + ", " + this.zip + "</span>\n                    </div>                 \n                </div>\n                <p class=\"small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2\">Created: " + this.createdTime.toLocaleString('de-DE') + "</p>   \n            </div>\n        ";
    };
    return Home;
}());
var Loc = /** @class */ (function (_super) {
    __extends(Loc, _super);
    function Loc(name, picture, description, address, zip, createdTime) {
        return _super.call(this, name, picture, description, address, zip, createdTime) || this;
    }
    return Loc;
}(Home));
var Res = /** @class */ (function (_super) {
    __extends(Res, _super);
    function Res(name, picture, description, address, zip, tel, web, createdTime) {
        var _this = _super.call(this, name, picture, description, address, zip, createdTime) || this;
        _this.tel = tel;
        _this.web = web;
        return _this;
    }
    Res.prototype.buildRes = function () {
        document.querySelector('.content').innerHTML += "\n        <div class=\"col-lg-3 col-md-4 col-sm-6 p-2 mb-4\">\n            <div class = \"h-100 col-lg-12 col-md-12 p-0 bg-light rounded-top border-top border-right border-left\">\n                <div class = \"text-center p-2\">\n                    " + this.name + "\n                </div>\n                <div>\n                    <img src=\"" + this.picture + "\" class=\"img-thumbnail\">\n                </div>\n                <div class=\"pl-3 pr-3\">\n                    <p class=\"text-center small\">" + this.description + "</p>\n                    <p class=\"text-center small\">" + this.address + ", " + this.zip + "</p>\n                    <p class=\"text-center small\"><i class=\"fa fa-phone\"></i> " + this.tel + "</p>\n                    <p class=\"text-center small\"><a href=\"" + this.web + "\">Website</a></p>\n                </div>\n            </div>\n            <p class=\"small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2\">Created: " + this.createdTime.toLocaleString('de-DE') + "</p>\n        </div>\n        ";
    };
    return Res;
}(Home));
var Eve = /** @class */ (function (_super) {
    __extends(Eve, _super);
    function Eve(name, picture, description, address, zip, web, time, date, price, createdTime) {
        var _this = _super.call(this, name, picture, description, address, zip, createdTime) || this;
        _this.web = web;
        _this.time = time;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    Eve.prototype.buildEvent = function () {
        document.querySelector('.content').innerHTML += "\n            <div class=\"col-lg-3 col-md-4 col-sm-6 p-2 mb-4\">\n                <div class = \"h-100 col-lg-12 col-md-12 p-0 bg-light rounded-top border-top border-right border-left\">\n                    <div class = \"text-center p-2\">\n                        " + this.name + "\n                    </div>\n                    <div>\n                        <img src=\"" + this.picture + "\" class=\"img-thumbnail\">\n                    </div>\n                    <div class=\"pl-3 pr-3\">\n                        <p class=\"text-center small\">" + this.description + "</p>\n                        <p class=\"text-center small\"><a href=\"" + this.web + "\">Website</a></p>\n                        <p class=\"text-center small\">Price: " + this.price + "</p> \n                        <p class=\"text-center small\">Starts: " + this.date + ", " + this.time + "</p>\n                    </div>\n                </div>\n                <p class=\"small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2\">Created: " + this.createdTime.toLocaleString('de-DE') + "</p>\n            </div>\n        ";
    };
    return Eve;
}(Home));
var sortButtonUp = function (arr, buildFunction) {
    console.log('sort', document.querySelectorAll('.up'));
    document.querySelector('.up').addEventListener('click', function () {
        var newArray = arr.sort(function (a, b) {
            return a.createdTime.getTime() - b.createdTime.getTime();
        });
        console.log(newArray, buildFunction);
        buildFunction(newArray);
    });
};
var sortButtonDown = function (arr, buildFunction) {
    document.querySelector('.down').addEventListener('click', function () {
        var newArray = arr.sort(function (a, b) {
            return b.createdTime.getTime() - a.createdTime.getTime();
        });
        buildFunction(newArray);
    });
};
// Create "location" objects 
var poznanCityHall = new Loc("Ratusz Poznanski", "./img/Ratusz.jpg", "City Hall and City Center", "plac Kolegiacki 17", "61-841, Poznan", "2012-01-26 13:51:50");
var poznanCathedral = new Loc("Poznan Cathedral", "./img/cathedral.jpg", "The biggest of many Churches", "Ostrów Tumski 17", "61-109, Poznan", "2017-10-25 10:10");
var poznanBrama = new Loc("Brama Poznania", "./img/brama.jpg", "Museum of Polish History", "Gdańska 2", "61-123 Poznań, Poland", "2016-10-26 13:55:34");
// Create "restaurant" objects
var rynek = new Res("Rynek 95", "./img/rynek.jpg", "Local cuisine, Polish, Bar, European", "ul. Stary Rynek 95", "61-773, Poland", "+48 884 810 004", "https://www.facebook.com/rynek95", "2018-12-24 12:03:26");
var yetztu = new Res("YetzTu", "./img/yetztu.jpg", "Japanese, Asian, Soups", "Krysiewicza 6", "61-825, Poland", "+48 61 840 17 12", "https://www.facebook.com/yetztupoznan/", "2018-04-15 19:26:14");
var oberza = new Res("Oberza Pod Dzwonkiem", "./img/oberza.jpg", "Polish, Central European, Vegetarian Friendly", "Garbary 54", "61-758, Poland", "+48 61 851 99 70", "https://www.facebook.com/poddzwonkiem", "2019-05-05 13:01:52");
// Create "event" objects
var marathon = new Eve("Poznan Marathon", "./img/marathon.jpg", "Starts at Grunwaldzka street Gate 5", "", "", "https://halfmarathon.poznan.pl/en/", "8:00 AM", "05.04.2020", "95 PLN", "2019-06-21 15:06:42");
var animator = new Eve("Animator Festival", "./img/animator.jpg", "Animated Movies Festival", "Kino Muza, ul. Św. Marcin 30", "", "http://www.animator-festival.com/en/", "4.00 pm", "10 - 17.7.2020", "15 PLN", "2019-06-04 06:06:06");
var fest = new Eve("Malta Festival", "./img/malta.jpg", "Music and Art Festival at Lake Malta", "", "", "https://malta-festival.pl/en/", "see schedule", "21 - 30.06.2020", "FREE", "2019-04-01 05:12:01");
home.push(poznanCityHall, poznanCathedral, poznanBrama, rynek, yetztu, oberza, marathon, animator, fest);
locaCity.push(poznanCityHall, poznanCathedral, poznanBrama);
restaCity.push(rynek, yetztu, oberza);
eventCity.push(marathon, animator, fest);
// builds home 
var buildHome = function (arr) {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').insertAdjacentHTML('beforeend', "\n        <div class=\"container\">\n            <h3 class=\"text-center p-3\">\n                Welcome to my Travel Blog!\n            </h3>\n            <p class=\"text-center\">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-center pb-3\">\n                    <button class=\"btn btn-light col-md-3 col-sm-5 border up mr-1\"><span class=\"small\"><i class=\"fa fa-arrow-up\"></i>Sort Up</span></button>\n                    <button class=\"btn btn-light col-md-3 col-sm-5 border down ml-1\"><span class=\"small\"><i class=\"fa fa-arrow-down\"></i>Sort Down</span></button>\n                </div>\n            </div>\n        </div>");
    arr.forEach(function (x) { x.build(); });
    sortButtonUp(arr, buildHome);
    sortButtonDown(arr, buildHome);
};
//builds home after moving to another section
var buildHomeAfterClick = function (arr) {
    document.querySelector('.home').addEventListener('click', function () {
        buildHome(arr);
    });
};
// builds locations
var buildLocation = function (arr) {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').insertAdjacentHTML('beforeend', "\n        <div class=\"container\">\n            <h3 class=\"text-center p-3\">\n                Here are some locations I recommend\n            </h3>\n            <p class=\"text-center\">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-center pb-3\">\n                <button class=\"btn btn-light col-md-3 col-sm-5 border up mr-1\"><span class=\"small\"><i class=\"fa fa-arrow-up\"></i>Sort Up</span></button>\n                <button class=\"btn btn-light col-md-3 col-sm-5 border down ml-1\"><span class=\"small\"><i class=\"fa fa-arrow-down\"></i>Sort Down</span></button>\n                </div>\n            </div>\n        </div>");
    arr.forEach(function (x) { x.build(); });
    sortButtonUp(arr, buildLocation);
    sortButtonDown(arr, buildLocation);
};
var buildLocAfterClick = function (arr) {
    document.querySelector('.loc').addEventListener('click', function () {
        buildLocation(arr);
    });
};
// builds restaurants
var buildRestaurants = function (arr) {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').innerHTML = "\n        <div class=\"container\">\n            <h3 class=\"text-center p-3\">\n                My favorite restaurants!\n            </h3>\n            <p class=\"text-center\">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-center pb-3\">\n                <button class=\"btn btn-light col-md-3 col-sm-5 border up mr-1\"><span class=\"small\"><i class=\"fa fa-arrow-up\"></i>Sort Up</span></button>\n                <button class=\"btn btn-light col-md-3 col-sm-5 border down ml-1\"><span class=\"small\"><i class=\"fa fa-arrow-down\"></i>Sort Down</span></button>\n                </div>\n            </div>\n        </div>";
    arr.forEach(function (x) { x.buildRes(); });
    sortButtonUp(arr, buildRestaurants);
    sortButtonDown(arr, buildRestaurants);
};
var buildResAfterClick = function (arr) {
    document.querySelector('.res').addEventListener('click', function () {
        buildRestaurants(arr);
    });
};
// builds events
var buildEvents = function (arr) {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').innerHTML = "\n        <div class=\"container\">\n            <h3 class=\"text-center p-3\">\n                Cool things to do\n            </h3>\n            <p class=\"text-center\">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-center pb-3\">\n                <button class=\"btn btn-light col-md-3 col-sm-5 border up mr-1\"><span class=\"small\"><i class=\"fa fa-arrow-up\"></i>Sort Up</span></button>\n                <button class=\"btn btn-light col-md-3 col-sm-5 border down ml-1\"><span class=\"small\"><i class=\"fa fa-arrow-down\"></i>Sort Down</span></button>\n                </div>\n            </div>\n        </div>";
    arr.forEach(function (x) { x.buildEvent(); });
    sortButtonUp(arr, buildEvents);
    sortButtonDown(arr, buildEvents);
};
var buildEveAfterClick = function (arr) {
    document.querySelector('.eve').addEventListener('click', function () {
        buildEvents(arr);
    });
};
buildHome(home);
buildHomeAfterClick(home);
buildLocation(locaCity);
buildLocAfterClick(locaCity);
buildRestaurants(restaCity);
buildResAfterClick(restaCity);
buildEvents(eventCity);
buildEveAfterClick(eventCity);
