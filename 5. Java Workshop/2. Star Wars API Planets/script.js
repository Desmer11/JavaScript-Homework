
let apiPlanets = ("https://swapi.dev/api/planets/")
let page = 1
let button = document.getElementById("button")
let buttonNext = document.getElementById("buttonNext")
let buttonPrevious = document.getElementById("buttonPrevious")


function fetchPlanets() {

  fetch(apiPlanets + `?page=${page}`)
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function(data) {
    console.log("Request Succesfull", data)
    functionPlanets(data.results)


  })

  .catch(function(response) {
    console.log(`The Requst has Failed: ${response.message}`)
  })
}

function functionPlanets(array) {

  let table = document.getElementById("planetsList")
  table.innerHTML = "";
  let thName = document.createElement("th")
  let thPopulation = document.createElement("th")

  thName.innerText = "Name"
  thPopulation.innerText = "Population"
    
  let trHeader = document.createElement("tr")

  trHeader.appendChild(thName)
  trHeader.appendChild(thPopulation)

  table.appendChild(trHeader)


  // --------------------------------------------


  if ($( "div" ).length == 0){
    let body = document.querySelector("body")
    let div = document.createElement('div');
   
    body.appendChild(div);
    
    let buttonPrevious2 = document.createElement('button');
    buttonPrevious2.innerText = 'Previous!';
    div.appendChild(buttonPrevious2);

    buttonPrevious2.addEventListener("click", function() {
      page--
      fetchPlanets()
    })

    let buttonNext2 = document.createElement('button');
    buttonNext2.innerText = 'Next!';
    div.appendChild(buttonNext2);

    buttonNext2.addEventListener("click", function() {
      page++;
      fetchPlanets()
    })
}



  // ----------------------------------------------------

  array.forEach(element => {
    let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    let tdPopulation = document.createElement("td")

    tdName.innerText = element.name
    tdPopulation.innerText = element.population

    tr.appendChild(tdName)
    tr.appendChild(tdPopulation)

    tr.style.color = "black"
    tr.style.fontSize = "20px"

    table.appendChild(tr)
});
}

button.addEventListener("click", function(){
  fetchPlanets()
})

buttonNext.addEventListener("click", function() {
  page++;
  fetchPlanets()
})

buttonPrevious.addEventListener("click", function() {
  page--
  fetchPlanets()
})