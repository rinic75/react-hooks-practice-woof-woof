import React from "react";

function DogDetail({ dog, onUpdatedDog }) {
  
  if (!dog)  return <h3>Select a doggo</h3>
  const { id, name, isGoodDog, image } = dog

  function handleClick() {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({isGoodDog : !isGoodDog})
    }
    )
    .then(r=> r.json())
    .then(dog=>onUpdatedDog(dog))
  }

  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={handleClick}>{isGoodDog? "Good Dog!" : "Bad Dog!"}</button>
    </>
  )
}

export default DogDetail