// -----------------------------------------------------------FETCH
let url=("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")

function fetchStudents() {
  fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    console.log("Request Succesfull: ")
    console.log("json: ",json)
    printGrades(json)
    femaleTopStudents(json)
    femaleAverageGrades(json)
    maleInSkopje(json)
    malesNameB(json)
  })
  .catch(function(response) {
    console.log("The Request has Failed", response)
  })
}

let buttonFetch = document.getElementById("buttonFetch")
buttonFetch.addEventListener("click", function() {
  fetchStudents()
})

fetchStudents()
// -----------------------------------------------------------FETCH

function printGrades(array) {
  let grades = array.filter( student => student.averageGrade >= 3);
  console.log("Grades even or over 3: ",grades)
}
function femaleTopStudents(array) {
  let female = array.filter( student => student.gender == "Female");
  let topStudents = female.filter( student => student.averageGrade >= 5);
  console.log("Female Top Students: ",topStudents)
}
function femaleAverageGrades(array) {
  let female = array.filter( student => student.gender == "Female");
  let AverageGrades = female.filter( student => student.averageGrade >= 5);
  console.log("Female AverageGrades: ",AverageGrades)
}
function maleInSkopje(array) {
  let male = array.filter( student => student.gender == "Male");
  let maleAge = male.filter( student => student.age >= 18);
  console.log("Males over 18 Years: ",maleAge)
  let city = male.filter( student => student.city === "Skopje");
  console.log("Male Students in Skopje: ",city)
}
function malesNameB(array) {

  let male = array.filter( student => student.gender == "Male");
  let firstnameB = male.filter( student => student.firstname == "B");
  console.log("Names with first letter B", firstnameB)

}








// -------------------------------------------

// var sammy = { 
//   "first_name"  :  "Sammy", 
//   "last_name"   :  "Shark", 
//   "online"      :  true 
// }

// sammy.first_name
// sammy.last_name
// sammy.online


// var user_profile = { 
//   "username" : "SammyShark",
//   "social_media" : [
//     {
//       "description" : "twitter",
//       "link" : "https://twitter.com/digitalocean"
//     },
//     {
//       "description" : "facebook",
//       "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
//     },
//     {
//       "description" : "github",
//       "link" : "https://github.com/digitalocean"
//     }
//   ]
// }

// console.log(user_profile.social_media[1].description);
// console.log(user_profile.username);

// var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}

// var s = JSON.stringify(obj)
// console.log(s)

// var o = JSON.parse(s)
// console.log(o)

// var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

// var obj = JSON.parse(s);

// document.getElementById("user").innerHTML =
// "Name: " + obj.first_name + " " + obj.last_name + "<br>" +
// "Location: " + obj.location;


// ------------------------------------------------------------------------------------


// let student = fetch(url)
// .then(function(response) {
//   console.log(response)
//   return response.json()
// })
// .then(function(data) {
//   console.log("Request Succesfull", data)
//   data_function(data);
// })
// .catch(function(response) {
//   console.log("The Request has Failed")
// })

// function data_function(data){
//   console.log(data.length); 
// }

// console.log(student.name);



// -----------------------------------------
// async function fetchData(url1) {
//   const response = await fetch(url1);
//   const data = await response.json();
//   return data;
// }
// const citiesData = [];
// const url1 = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// // Fetch data only once
// async function getData() {
//   const data = await fetchData(url1);
//   citiesData.push(...data);
//   console.log(citiesData.city);
// }
// getData();

// console.log(citiesData);

// // ----------------------------------------------------------


// let data  = ''
// let x;
// fetch(url)
//   .then(function(response) {
//     return response.json();})
//   .then(function(myJson) {
//     data = myJson 
//     console.log(data)
//     x = myJson;
   
//  });

 