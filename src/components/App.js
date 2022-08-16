import React, { useEffect, useState } from "react";
import DogsList from "./DogsList";
import DogDetail from "./DogDetail";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState(null)
  const [filter, setFilter] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:3001/pups')
    .then(r=>r.json())
    .then(dogs => setDogs(dogs))
  },[])

  function handleClick(id) {
    setSelectedDog(id)
  }

  const selectDog = dogs.find(dog => dog.id === selectedDog)

  function handleUpdatedDog(updatedDog) {
    const updatedDogs = dogs.map(dog =>  {
      if(dog.id ===updatedDog.id) {
        return updatedDog
      } else {
        return dog
      }
    })
    setDogs(updatedDogs)
  }

  function handleFilterClick() {
    setFilter(prev => !prev)
  }
  let displayDogs = dogs
  if(filter) {
    displayDogs = dogs.filter(dog => dog.isGoodDog === true)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilterClick}>Filter good dogs: {filter? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        <DogsList dogs={displayDogs} onHandleClick={handleClick}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogDetail dog={selectDog} onUpdatedDog={handleUpdatedDog}/>
        </div>
      </div>
    </div>
  );
}

export default App;
