const apodUrl = `https://api.nasa.gov/planetary/apod`;
const roversUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`
const apiKey = 'uk4YPJK2OYS0rh6pV2iLN53w7lNp1qOBKR7Tmn1h';
const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth()) + '-' + (today.getDate()); //sets format to YYYY-MM-DD
console.log(date)
const section = document.querySelector('.results')
const url1 = `${apodUrl}?api_key=${apiKey}`;
const url2 = `${roversUrl}?sol=1000&api_key=${apiKey}`

// const urls = [    // attempting to utilize promise all to load multiple api's. Come back to later
//     apod = url1,
//     rovers = url2,
//   ]
  
//   const fetchData = async () => {
//     try {
//       const response = await Promise.all(
//         urls.map(url => fetch(url).then(res => res.json())),
//       )
//       console.log(response)
//     } catch (error) {
//       console.log("Error", error)
//     }
//   }
//   fetchData(apod, rovers)

// function contentLoader() { // allows content to diplay on page load
//     fetchData(apod, rovers); // calls rovers
// };

// function fetchApod() {
//     return fetch(url1)
//         .then(res => res.json());
// }


function fetchResults1() {
    return fetch(url1)
        .then(res => res.json());
}

function fetchResults2() {
    fetch(url2)
        .then(res => res.json())
        .then(results2 => {
            console.log(results2)
            fetchResults1()
                .then(results1 => {
                    console.log(results1)
                    displayResults(results1, results2);
                });
        });
}

function contentLoader() { // allows content to diplay on page load
    fetchResults2(); // calls rovers
};


function displayResults(apod, rovers) { //function for displaying data 
    let apodContent = document.createElement('div') 
    let apodTitle = document.createElement('h1')
    let apodImg = document.createElement('img')
    let apodExplanation = document.createElement("p")
    
    let roversContent = document.createElement('div') 
    let roversTitle = document.createElement('h1')
    let roversImg = document.createElement('img')

    apodContent.setAttribute('class', 'apod')
    // apodTitle.setAttribute('id', 'apodTitle')
    apodTitle.textContent = apod.title
    apodImg.src = apod.url
    apodExplanation.textContent = apod.explanation
    
    roversContent.setAttribute('class', 'rovers')
    roversTitle.setAttribute('id', 'rover')
    roversTitle.textContent = rovers.photos[0].rover.name
    roversImg.src = rovers.photos[4].img_src

    section.appendChild(apodContent)
    apodContent.appendChild(apodTitle)
    apodContent.appendChild(apodImg)
    apodContent.appendChild(apodExplanation)   
    
    section.appendChild(roversContent)
    roversContent.appendChild(roversTitle)
    roversContent.appendChild(roversImg)   
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {  //! compliments to w3 schools
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function contentLoader() { // allows content to diplay on page load
//     fetchResults(); // calls fetchResults
// };


// function fetchResults() { 
//     url = `${apodUrl}?api_key=${apiKey}`; //assigning value of url + key 

//     fetch(url)//get results from our search url
//         .then(function (result) {//promise resolver
//             // console.log(result) 
//             return result.json(); //returns our data in JSON format JSON-ify
//         })
//         .then(function (data) { //chaining promise resolver
//             console.log(data); 
//             displayResults(data); //grabs the json-ified results and feeds (argument) to displayResults function
//         })
// }

// document.getElementById('apodTitle').innerText = data.title; // adding title to html from data recieved
    // document.getElementById('apodImg').innerHTML =  `<img src="${data.url}"id="imageOfTheDay"/>`; //adding img to html from data recieved ` needed for interpolation
    // document.getElementById('explanation').innerHTML = data.explanation; // adding explanation under the apodImg

let randomPhoto = Math.floor(Math.random() * 1000) + 1;
i = randomPhoto.value