window.addEventListener("load", function () {
    let listedPlanets;
    
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
      })
      .then(function () {
        console.log(listedPlanets);
       let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
          document,
          myPlanet.name,
          myPlanet.diameter,
          myPlanet.star,
          myPlanet.distance,
          myPlanet.moons,
          myPlanet.image
        ); 
         console.log("OMG");
        
      });
  
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevels = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    list.style.visibility = "hidden";
    console.log("hello");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      formSubmission(
        document,
        list,
        pilotName.value,
        copilotName.value,
        fuelLevels.value,
        cargoMass.value
      );
      console.log(pilotName.value);
    });
  });