import React from "react";

function DogsList({dogs, onHandleClick}) {
  const renderDogs = dogs.map(dog => {
    return <span key={dog.id} onClick={()=>onHandleClick(dog.id)}>{dog.name}</span>
  })
  return(
    <>
      {renderDogs}
    </>
  )
}

export default DogsList