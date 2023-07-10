let time = document.getElementById("time");
let item = localStorage.getItem("User");
let randomLS = localStorage.getItem("Sentence");
let random_Hellos;
let random = document.getElementById("random");
let user =  document.getElementById("User");
let searchBar = document.getElementById("search_Bar");
let searchBtn = document.getElementById("searchBtn");
let amPM = " AM"
let noShowToggle = document.getElementById("noShowToggle");



function updatedTime(){
let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();

   if(hrs >= 12){
    hrs = hrs - 12;
        amPM = " PM";
   }

   if(hrs == 0){
    hrs = 12;
  }
min = (min < 10) ? "0" + min: min;

document.getElementById("hours").innerHTML =  hrs;
document.getElementById("minutes").innerHTML =  min;
document.getElementById("amPm").innerHTML = amPM;
}
setInterval(updatedTime,10);



function backgroundChange(){
    let date = new Date(); 
    let hrs = date.getHours();
    
    if(hrs < 12){
        let image1 = document.querySelector("img");
        let imgsrc1 = image1.getAttribute("src");
        if (imgsrc1 === "") {
            image1.src = "img/morningimg.webp";
            }
   } else if (hrs < 18){
        let image2 = document.querySelector("img");
        let imgsrc2 = image2.getAttribute("src");
        if (imgsrc2=== "") {
          image2.src =  "img/afternoonimg.webp";
          
        }
        
        
   } else{
        let image3 = document.querySelector("img");
        let imgsrc3 = image3.getAttribute("src");
        if (imgsrc3 === "") {
          image3.src = "img/nightimg.jpg";
        }
   }
   }
   backgroundChange();

   let morningArray = ["img/morningimg.webp", "img/morning2.jpg","img/morning3.jpg"];
   let afternoonArray = ["img/afternoonimg.webp","img/afternoon2.jpg","img/afternoon3.webp"];
   let nightArray = ["img/night1.jpg","img/night2.webp","img/night3.jpg"];
   

   function randomBackroundA(){
    let image2 = document.querySelector("img");
    let randomBdA = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];
    image2.src = randomBdA;
    
     
  }
  randomBackroundA();

   function randomBackroundM(){
    let image1 = document.querySelector("img");
    let randomBdM = morningArray[Math.floor(Math.random() * morningArray.length)];
     image1.src = randomBdM;
  }
  randomBackroundM();
  
  function randomBackroundN(){
    let image3 = document.querySelector("img");
    let randomBdN = nightArray[Math.floor(Math.random() * nightArray.length)];
     image3.src = randomBdN;
  }
  randomBackroundN();


  function afternoon(){
    let date = new Date();
    let hrs = date.getHours();
    if(hrs < 18){
    backgroundChange();
    randomBackroundA();
    }
  }
  afternoon();

  function morning(){
    let date = new Date();
    let hrs = date.getHours();
    if(hrs < 12){
    backgroundChange();
    randomBackroundM();
    }
  }
  morning();

  function night(){
    let date = new Date();
    let hrs = date.getHours();
    if(hrs < 0){
    backgroundChange();
    randomBackroundM();
    }
  }
  night();

 

user.addEventListener("keypress", (e) =>{  
  if(e.key == "Enter"){
    localStorage.setItem("User", user.value);
}
})

user.addEventListener("blur", (e) =>{  
        userClick();
})
user.value = item;

searchBtn.addEventListener("click", () =>{
      searchBtnClick();
         
})
searchBar.addEventListener("keypress", (e) =>{
  if(e.key == "Enter"){
    let url ='https://www.google.com/search?q=' + searchBar.value;
    window.open(url);
    searchBar.value = "";    
        }
      
})


  noShowToggle.addEventListener("click", ()=>{ 
    toggle();
    
  })
 

 function userClick(){
  user.innerHTML = user.value; 
  localStorage.setItem("User", user.value);
  
  
 }
 function searchBtnClick(){
  let url ='https://www.google.com/search?q=' + searchBar.value;
  window.open(url);
  searchBar.value = "";   
 }
 

  
  random_Hellos = [
    "WOW! your looking mighty fine today " +item+" ."
    ,item+" looking great!!"
    ,"Not gonna lie you kinda lookin musty today "+item
    ,"I never forget a face but in your case, I’ll be glad to make an exception"
    ,"hey remember this "+item+" Trying is the first step toward failure"
    ,"Eggs are fantastic for a fitness diet. If you don’t like the taste, just add cocoa, flour, sugar, butter, baking powder and cook at 350 for 30 minutes"
    ,"Accept who you are. Unless you’re a serial killer."
    ,"Always remember that you are unique just like everybody else"
    ,"We generate fears while we sit. We overcome them by action."
    ,"A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life."
    ,"He who is not courageous enough to take risks will accomplish nothing in life."
    ];
  

    function randomHeys(){
      let hellos = random_Hellos[Math.floor(Math.random()* random_Hellos.length)];
       random.innerHTML= hellos;
       
  }
  randomHeys();




  function toggle(){

 

    if ( noShowToggle.innerHTML ==="Don't Show" || noShowToggle.innerHTML == ""){
      
      
      random.style.visibility ="hidden";
      noShowToggle.innerHTML = "Show";
      localStorage.setItem("Sentence", random.style.visibility);
      localStorage.setItem("HTML", random.innerHTML);
      localStorage.setItem("toggle",noShowToggle.innerHTML);
      
    }
    
   else if(  noShowToggle .innerHTML === "Show" || noShowToggle.innerHTML == ""){
      
      random.style.visibility = "visible"; 
      noShowToggle .innerHTML = "Don't Show";
      localStorage.setItem("Sentence", random.style.visibility);
      localStorage.setItem("HTML", random.innerHTML);
      localStorage.setItem("toggle",noShowToggle.innerHTML);
      
    }
     
    
  }
  random.style.visibility = localStorage.getItem("Sentence");
  noShowToggle .innerHTML = localStorage.getItem("toggle");


  // Define variables for the current date
const today = new Date();

let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let monthname = document.getElementById("monthName");
monthname.innerHTML = month + ",";

let dayname = document.getElementById("dayName");
dayname.innerHTML = date + ",";

let yearname = document.getElementById("yearName");
yearname.innerHTML = year;




 



  
  










   
    





