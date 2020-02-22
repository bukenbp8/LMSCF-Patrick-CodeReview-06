// empty arrays for location objects 
const home = [];
const locaCity = [];
const restaCity = [];
const eventCity = []; 

//creating classes which will be templates for objects
class Home {
    name: string;
    picture: string;
    description: string;
    address: any;
    zip: any;
    createdDate: string;
    createdTime: string;

    constructor(name: string, picture: string, description: string, address: any, zip: any, createdDate: string, createdTime: string){
        this.name = name;
        this.picture = picture;
        this.description = description;
        this.address = address;
        this.zip = zip;
        this.createdDate = createdDate;
        this.createdTime = createdTime;

        home.push(this);
    }
    // creates DOM elements
    build(){
        document.querySelector('.content').innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 p-2 mb-4">
                <div class = "h-100 col-lg-12 col-md-12 p-0 bg-light rounded-top border-top border-right border-left">
                    <div class = "text-center p-2">
                        ${this.name}
                    </div>
                    <div>
                        <img src="${this.picture}" class="img-thumbnail">
                    </div>
                    <div class="pl-3 pr-3">
                        <span class="text-center small">Info: ${this.description}</span><br>
                        <span class="text-center small">Address: ${this.address}, ${this.zip}</span>
                    </div>                 
                </div>
                <p class="small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2">Created: ${this.createdDate} ${this.createdTime}</p>   
            </div>
        `
    }
}

class Loc extends Home {
    
    constructor(name: string, picture: string, description: string, address: any, zip: any, createdDate: string, createdTime: string){
        super(name, picture, description, address, zip, createdDate, createdTime)
        locaCity.push(this);
    }
}

class Res extends Home {
    tel: string;
    web: string;

    constructor(name: string, picture: string, description: string, address: any, zip: any, tel: string, web: string, createdDate: string, createdTime: string){
        super(name, picture, description, address, zip, createdDate, createdTime)
        this.tel = tel;
        this.web = web;
        restaCity.push(this);
    }

    buildRes(){
        document.querySelector('.content').innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 p-2 mb-4">
            <div class = "h-100 col-lg-12 col-md-12 p-0 bg-light rounded-top border-top border-right border-left">
                <div class = "text-center p-2">
                    ${this.name}
                </div>
                <div>
                    <img src="${this.picture}" class="img-thumbnail">
                </div>
                <div class="pl-3 pr-3">
                    <p class="text-center small">${this.description}</p>
                    <p class="text-center small">${this.address}, ${this.zip}</p>
                    <p class="text-center small"><i class="fa fa-phone"></i> ${this.tel}</p>
                    <p class="text-center small"><a href="${this.web}">Website</a></p>
                </div>
            </div>
            <p class="small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2">Created: ${this.createdDate} ${this.createdTime}</p>
        </div>
        `
    }
}

class Eve extends Home {
    web: string;
    time: string;
    date: string;
    price: string;

    constructor(name: string, picture: string, description: string, address: any, zip: any, web: string, time: string, date: string, price: string, createdDate: string, createdTime: string){
        super(name, picture, description, address, zip, createdDate, createdTime)
        this.web = web;
        this.time = time;
        this.date = date;
        this.price = price;
        eventCity.push(this);
    }

    buildEvent(){
        document.querySelector('.content').innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 p-2 mb-4">
                <div class = "h-100 col-lg-12 col-md-12 p-0 bg-light rounded-top border-top border-right border-left">
                    <div class = "text-center p-2">
                        ${this.name}
                    </div>
                    <div>
                        <img src="${this.picture}" class="img-thumbnail">
                    </div>
                    <div class="pl-3 pr-3">
                        <p class="text-center small">${this.description}</p>
                        <p class="text-center small"><a href="${this.web}">Website</a></p>
                        <p class="text-center small">Price: ${this.price}</p> 
                        <p class="text-center small">Starts: ${this.date}, ${this.time}</p>
                    </div>
                </div>
                <p class="small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2">Created: ${this.createdDate} ${this.createdTime}</p>
            </div>
        `
    }
}

// Create "location" objects 
const poznanCityHall = new Loc("Ratusz Poznanski", "./img/Ratusz.jpg", "City Hall and City Center", "plac Kolegiacki 17", "61-841, Poznan", "24.10.2016", "10:00")
const poznanCathedral = new Loc("Poznan Cathedral", "./img/cathedral.jpg", "The biggest of many Churches", "Ostrów Tumski 17", "61-109, Poznan", "25.10.2017", "11:34")
const poznanBrama = new Loc("Brama Poznania", "./img/brama.jpg", "Museum of Polish History", "Gdańska 2", "61-123 Poznań, Poland", "26.10.2016", "18:23")
// Create "restaurant" objects
const rynek = new Res("Rynek 95", "./img/rynek.jpg", "Local cuisine, Polish, Bar, European", "ul. Stary Rynek 95", "61-773, Poland", "+48 884 810 004", "https://www.facebook.com/rynek95","24.12.2018", "12:00")
const yetztu = new Res("YetzTu", "./img/yetztu.jpg", "Japanese, Asian, Soups", "Krysiewicza 6", "61-825, Poland", "+48 61 840 17 12", "https://www.facebook.com/yetztupoznan/", "15.4.2018", "19:26")
const oberza = new Res("Oberza Pod Dzwonkiem", "./img/oberza.jpg", "Polish, Central European, Vegetarian Friendly", "Garbary 54", "61-758, Poland", "+48 61 851 99 70", "https://www.facebook.com/poddzwonkiem", "5.5.2019", "3:00")
// Create "event" objects
const marathon = new Eve("Poznan Marathon", "./img/marathon.jpg", "Starts at Grunwaldzka street Gate 5", "", "", "https://halfmarathon.poznan.pl/en/", "8:00 AM", "05.04.2020", "95 PLN", "21.6.2019", "15:06")
const animator = new Eve("Animator Festival", "./img/animator.jpg", "Animated Movies Festival", "Kino Muza, ul. Św. Marcin 30", "", "http://www.animator-festival.com/en/", "4.00 pm", "10 - 17.7.2020", "15 PLN", "4.6.2019", "6:06")
const fest = new Eve("Malta Festival", "./img/malta.jpg", "Music and Art Festival at Lake Malta", "", "", "https://malta-festival.pl/en/", "see schedule", "21 - 30.06.2020", "FREE", "1.4.2019", "5:12")

// builds home 
const buildHome = (arr) => {
document.querySelector('.content').innerHTML = `
        <div class="container">
            <h3 class="text-center p-3">
                Welcome to my Travel Blog!
            </h3>
            <p class="text-center">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center pb-3">
                    <button class="btn btn-light col-md-3 col-sm-5 border up mr-1"><span class="small"><i class="fa fa-arrow-up"></i>Sort Up</span></button>
                    <button class="btn btn-light col-md-3 col-sm-5 border down ml-1"><span class="small"><i class="fa fa-arrow-down"></i>Sort Down</span></button>
                </div>
            </div>
        </div>`
arr.forEach((x) => { x.build()})}

//builds home after moving to another section
const buildHomeAfterClick = (arr) => {
document.querySelector('.home').addEventListener('click', ()=>{
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').innerHTML = `
        <div class="container">
            <h3 class="text-center p-3">
                Welcome to my Travel Blog!
            </h3>
            <p class="text-center">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center pb-3">
                <button class="btn btn-light col-md-3 col-sm-5 border up mr-1"><span class="small"><i class="fa fa-arrow-up"></i>Sort Up</span></button>
                <button class="btn btn-light col-md-3 col-sm-5 border down ml-1"><span class="small"><i class="fa fa-arrow-down"></i>Sort Down</span></button>
                </div>
            </div>
        </div>`
    arr.forEach((x) => { x.build()})
})}

// builds locations
const buildLocation = (arr) => {
document.querySelector('.loc').addEventListener('click', ()=>{
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').innerHTML = `
        <div class="container">
            <h3 class="text-center p-3">
                Here are some locations I recommend
            </h3>
            <p class="text-center">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center pb-3">
                <button class="btn btn-light col-md-3 col-sm-5 border up mr-1"><span class="small"><i class="fa fa-arrow-up"></i>Sort Up</span></button>
                <button class="btn btn-light col-md-3 col-sm-5 border down ml-1"><span class="small"><i class="fa fa-arrow-down"></i>Sort Down</span></button>
                </div>
            </div>
        </div>`
    arr.forEach((x) => { x.build()})
})}

// builds restaurants
const buildRestaurants = (arr) => {
document.querySelector('.res').addEventListener('click', ()=>{
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').innerHTML = `
        <div class="container">
            <h3 class="text-center p-3">
                My favorite restaurants!
            </h3>
            <p class="text-center">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center pb-3">
                <button class="btn btn-light col-md-3 col-sm-5 border up mr-1"><span class="small"><i class="fa fa-arrow-up"></i>Sort Up</span></button>
                <button class="btn btn-light col-md-3 col-sm-5 border down ml-1"><span class="small"><i class="fa fa-arrow-down"></i>Sort Down</span></button>
                </div>
            </div>
        </div>`
    arr.forEach((x) => { x.buildRes()})
})}

// builds events
const buildEvents = (arr) => {
document.querySelector('.eve').addEventListener('click', ()=>{
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').innerHTML = `
        <div class="container">
            <h3 class="text-center p-3">
                Cool things to do
            </h3>
            <p class="text-center">You can sort all places I've been to. By clicking on the buttons below you will sort them according to the time of visit.</p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center pb-3">
                <button class="btn btn-light col-md-3 col-sm-5 border up mr-1"><span class="small"><i class="fa fa-arrow-up"></i>Sort Up</span></button>
                <button class="btn btn-light col-md-3 col-sm-5 border down ml-1"><span class="small"><i class="fa fa-arrow-down"></i>Sort Down</span></button>
                </div>
            </div>
        </div>`
    sortButtonUp(eventCity, buildEvents)
    sortButtonDown(eventCity, buildEvents)    
    arr.forEach((x) => { x.buildEvent()})
})}

buildHome(home)
buildHomeAfterClick(home)
buildLocation(locaCity)
buildRestaurants(restaCity)
buildEvents(eventCity)


const sortButtonUp = (arr, buildFunction) => {
    document.querySelector('.up').addEventListener('click', ()=>{
        const newArray = arr.sort((a,b)=> {
            return parseInt(b.createdDate.split('.').join("")) - parseInt(a.createdDate.split('.').join(""))
        });
        buildFunction(newArray)
    })
}

const sortButtonDown = (arr, buildFunction) => {
    document.querySelector('.up').addEventListener('click', ()=>{
        const newArray = arr.sort((a,b)=> {
            return parseInt(a.createdDate.split('.').join("")) - parseInt(b.createdDate.split('.').join(""))
        });
        buildFunction(newArray)
    })
}
