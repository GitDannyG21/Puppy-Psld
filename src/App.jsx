


import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick() {

  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);


  console.log(puppies)

  return (
    <>
      <div>
      {featPupId}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>

        
      )}

<br>
</br>
<br></br>

      { 
   puppies.map((puppy) => {
     return <p onClick={()=>{ setFeatPupId(puppy.id)}}  key={puppy.id}>{puppy.name}</p>
   })
}
      </div>
      
      <div className="card">
       
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
