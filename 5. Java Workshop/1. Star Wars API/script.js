// --------------------------------------------------------------------------------
let apiPeople = "https://swapi.dev/api/people/"
let pagePeople = 1

let buttonPeople = document.getElementById("buttonPeople")
let buttonPeopleNext = document.getElementById("buttonPeopleNext")
let buttonPeoplePrevious = document.getElementById("buttonPeoplePrevious")

function fetchPeople() {
  fetch(apiPeople + `?page=${pagePeople}`)
  .then(function(response) {
    console.log(response)
    return response.json()
  })
  .then(function(data) {
    console.log("Request Succesfull", data)
    functionPeople(data.results)
  })
  .catch(function(response) {
    console.log("The Request has Failed")
  })
}
function functionPeople(array) {

    // ---------------------------------------------------- Creating Table
    let table = document.getElementById("tablePeople")
    table.innerHTML = "";
    let thName = document.createElement("th")
    let thHeight = document.createElement("th")
    let thMass = document.createElement("th")
    let thGender = document.createElement("th")
    let thYear = document.createElement("th")
    let thMovies = document.createElement("th")

    thName.innerText = "Name"
    thHeight.innerText = "Height ( cm )"
    thMass.innerText = "Mass ( kg )"
    thGender.innerText = "Gender"
    thYear.innerText = "Birth Year"
    thMovies.innerText = "Appearances"

    let trHeader = document.createElement("tr")

    trHeader.appendChild(thName)
    trHeader.appendChild(thHeight)
    trHeader.appendChild(thMass)
    trHeader.appendChild(thGender)
    trHeader.appendChild(thYear)
    trHeader.appendChild(thMovies)

    table.appendChild(trHeader)
    
    // -----------------------------------------Inputing Data to table
    array.forEach(element => {
        let tr = document.createElement("tr")
        let tdName = document.createElement("td")
        let tdHeight = document.createElement("td")
        let tdMass = document.createElement("td")
        let tdGender = document.createElement("td")
        let tdYear = document.createElement("td")
        let tdMovies = document.createElement("td")

        tdName.innerText = element.name
        tdHeight.innerText = element.height
        tdMass.innerText = element.mass
        tdGender.innerText = element.gender
        tdYear.innerText = element.birth_year
        tdMovies.innerText = element.films.length

        tr.appendChild(tdName)
        tr.appendChild(tdHeight)
        tr.appendChild(tdMass)
        tr.appendChild(tdGender)
        tr.appendChild(tdYear)
        tr.appendChild(tdMovies)

        tr.style.color = "black"
        tr.style.fontSize = "18px"

        table.appendChild(tr)
    });
  }

  buttonPeople.addEventListener("click", function() {
    fetchPeople() 
    })

  buttonPeopleNext.addEventListener("click", function() {
    pagePeople++;
    fetchPeople()
  })

  buttonPeoplePrevious.addEventListener("click", function() {
    pagePeople--
    fetchPeople()
  })

//   -------------------------------------------------------------------------------------


let apiShips = "https://swapi.dev/api/starships/"
let pageShips = 1

let buttonShips = document.getElementById("buttonShips")
let buttonShipsNext = document.getElementById("buttonShipsNext")
let buttonShipsPrevious = document.getElementById("buttonShipsPrevious")




function fetchShips() {
  fetch(apiShips + `?page=${pageShips}`)
  .then(function(response) {
    console.log(response)
    return response.json()
  })
  .then(function(data) {
    console.log("Request Succesfull", data)
    functionShips(data.results)
  })
  .catch(function(response) {
    console.log("The Request has Failed")
  })
}
  
function functionShips(array) {
    let table = document.getElementById("tableSpaceships")
    table.innerHTML = "";
    let thName = document.createElement("th")
    let thModel = document.createElement("th")
    let thManufacturer = document.createElement("th")
    let thCredits = document.createElement("th")
    let thCrewCapacity = document.createElement("th")
    let thClass = document.createElement("th")

    thName.innerText = "Name"
    thModel.innerText = "Model"
    thManufacturer.innerText = "Manufacturer"
    thCredits.innerText = "Credits"
    thCrewCapacity.innerText = "Crew Capacity"
    thClass.innerText = "Class"

    let trHeader = document.createElement("tr")

    trHeader.appendChild(thName)
    trHeader.appendChild(thModel)
    trHeader.appendChild(thManufacturer)
    trHeader.appendChild(thCredits)
    trHeader.appendChild(thCrewCapacity)
    trHeader.appendChild(thClass)

    table.appendChild(trHeader)
    
    array.forEach(element => {
        let tr = document.createElement("tr")
        let tdName = document.createElement("td")
        let tdModel = document.createElement("td")
        let tdManufacturer = document.createElement("td")
        let tdCredits = document.createElement("td")
        let tdCrewCapacity = document.createElement("td")
        let tdClass = document.createElement("td")
    
        let TotalPassengers = parseInt(element.crew) + parseInt(element.passengers)

        tdName.innerText = element.name
        tdModel.innerText = element.model
        tdManufacturer.innerText = element.manufacturer
        tdCredits.innerText = element.cost_in_credits
        tdCrewCapacity.innerText = TotalPassengers
        tdClass.innerText = element.starship_class

        tr.appendChild(tdName)
        tr.appendChild(tdModel)
        tr.appendChild(tdManufacturer)
        tr.appendChild(tdCredits)
        tr.appendChild(tdCrewCapacity)
        tr.appendChild(tdClass)

        tr.style.color = "black"
        tr.style.fontSize = "18px"

        table.appendChild(tr)
    });
  }

buttonShips.addEventListener("click", function() {
  fetchShips() 
    })

buttonShipsNext.addEventListener("click", function() {
  pageShips++;
    fetchShips()
  })

buttonShipsPrevious.addEventListener("click", function() {
  pageShips--
  fetchShips()
  })












