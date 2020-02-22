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
    createdTime: Date;

    constructor(name: string, picture: string, description: string, address: any, zip: any, createdTime: Date){
        this.name = name;
        this.picture = picture;
        this.description = description;
        this.address = address;
        this.zip = zip;
        this.createdTime = new Date(createdTime);
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
                <p class="small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2">Created: ${this.createdTime.toLocaleString('de-DE')}</p>   
            </div>
        `
    }
}

class Loc extends Home {
    
    constructor(name: string, picture: string, description: string, address: any, zip: any, createdTime: Date){
        super(name, picture, description, address, zip, createdTime)
    }
}

class Res extends Home {
    tel: string;
    web: string;

    constructor(name: string, picture: string, description: string, address: any, zip: any, tel: string, web: string, createdTime: Date){
        super(name, picture, description, address, zip, createdTime)
        this.tel = tel;
        this.web = web;
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
            <p class="small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2">Created: ${this.createdTime.toLocaleString('de-DE')}</p>
        </div>
        `
    }
}

class Eve extends Home {
    web: string;
    time: string;
    date: string;
    price: string;

    constructor(name: string, picture: string, description: string, address: any, zip: any, web: string, time: string, date: string, price: string, createdTime: Date){
        super(name, picture, description, address, zip, createdTime)
        this.web = web;
        this.time = time;
        this.date = date;
        this.price = price;
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
                <p class="small font-weight-lighter created bg-light border-bottom border-right border-left rounded-bottom pb-2 pr-2">Created: ${this.createdTime.toLocaleString('de-DE')}</p>
            </div>
        `
    }
}

const sortButtonUp = (arr, buildFunction) => {
    console.log('sort', document.querySelectorAll('.up'))
    document.querySelector('.up').addEventListener('click', () => {
        const newArray = arr.sort((a,b)=> {
            return a.createdTime.getTime() - b.createdTime.getTime()
            
        });
        console.log(newArray, buildFunction)
        buildFunction(newArray)
    })
}

const sortButtonDown = (arr, buildFunction) => {
    document.querySelector('.down').addEventListener('click', ()=>{
        const newArray = arr.sort((a,b)=> {
            return b.createdTime.getTime() - a.createdTime.getTime()
        });
        buildFunction(newArray)
    })
}

// Create "location" objects 
const poznanCityHall = new Loc("Ratusz Poznanski", "./img/Ratusz.jpg", "City Hall and City Center", "plac Kolegiacki 17", "61-841, Poznan", "2012-01-26 13:51:50")
const poznanCathedral = new Loc("Poznan Cathedral", "./img/cathedral.jpg", "The biggest of many Churches", "Ostrów Tumski 17", "61-109, Poznan", "2017-10-25 10:10")
const poznanBrama = new Loc("Brama Poznania", "./img/brama.jpg", "Museum of Polish History", "Gdańska 2", "61-123 Poznań, Poland", "2016-10-26 13:55:34")

// Create "restaurant" objects
const rynek = new Res("Rynek 95", "./img/rynek.jpg", "Local cuisine, Polish, Bar, European", "ul. Stary Rynek 95", "61-773, Poland", "+48 884 810 004", "https://www.facebook.com/rynek95","2018-12-24 12:03:26")
const yetztu = new Res("YetzTu", "./img/yetztu.jpg", "Japanese, Asian, Soups", "Krysiewicza 6", "61-825, Poland", "+48 61 840 17 12", "https://www.facebook.com/yetztupoznan/", "2018-04-15 19:26:14")
const oberza = new Res("Oberza Pod Dzwonkiem", "./img/oberza.jpg", "Polish, Central European, Vegetarian Friendly", "Garbary 54", "61-758, Poland", "+48 61 851 99 70", "https://www.facebook.com/poddzwonkiem", "2019-05-05 13:01:52")
// Create "event" objects
const marathon = new Eve("Poznan Marathon", "./img/marathon.jpg", "Starts at Grunwaldzka street Gate 5", "", "", "https://halfmarathon.poznan.pl/en/", "8:00 AM", "05.04.2020", "95 PLN", "2019-06-21 15:06:42")
const animator = new Eve("Animator Festival", "./img/animator.jpg", "Animated Movies Festival", "Kino Muza, ul. Św. Marcin 30", "", "http://www.animator-festival.com/en/", "4.00 pm", "10 - 17.7.2020", "15 PLN", "2019-06-04 06:06:06")
const fest = new Eve("Malta Festival", "./img/malta.jpg", "Music and Art Festival at Lake Malta", "", "", "https://malta-festival.pl/en/", "see schedule", "21 - 30.06.2020", "FREE", "2019-04-01 05:12:01")

home.push(poznanCityHall, poznanCathedral, poznanBrama, rynek,yetztu, oberza ,marathon ,animator ,fest) 
locaCity.push(poznanCityHall, poznanCathedral, poznanBrama)
restaCity.push(rynek,yetztu, oberza)
eventCity.push(marathon ,animator ,fest)

// builds home 
const buildHome = (arr) => {
    document.querySelector('.content').innerHTML = ''
    document.querySelector('.content').insertAdjacentHTML('beforeend', `
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
        </div>`)
    arr.forEach((x) => { x.build()})
    sortButtonUp(arr, buildHome)
    sortButtonDown(arr, buildHome)
}

//builds home after moving to another section
const buildHomeAfterClick = (arr) => {
    document.querySelector('.home').addEventListener('click', () => {
        buildHome(arr) 
    })
}


// builds locations
const buildLocation = (arr) => {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').insertAdjacentHTML('beforeend', `
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
        </div>`)
    arr.forEach((x) => { x.build()})
    sortButtonUp(arr, buildLocation)
    sortButtonDown(arr, buildLocation) 
}

const buildLocAfterClick = (arr) => { 
    document.querySelector('.loc').addEventListener('click', () => {
        buildLocation(arr)
    })
}
// builds restaurants
const buildRestaurants = (arr) => {
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
    sortButtonUp(arr, buildRestaurants)
    sortButtonDown(arr, buildRestaurants) 
}

const buildResAfterClick = (arr) => { 
    document.querySelector('.res').addEventListener('click', ()=>{
        buildRestaurants(arr)
    })
}

// builds events
const buildEvents = (arr) => {
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
    arr.forEach((x) => { x.buildEvent()})
    sortButtonUp(arr, buildEvents)
    sortButtonDown(arr, buildEvents)        
}

const buildEveAfterClick = (arr) => { 
    document.querySelector('.eve').addEventListener('click', ()=>{
        buildEvents(arr)
    })
}

buildHome(home)
buildHomeAfterClick(home)
buildLocation(locaCity)
buildLocAfterClick(locaCity)
buildRestaurants(restaCity)
buildResAfterClick(restaCity)
buildEvents(eventCity)
buildEveAfterClick(eventCity)



