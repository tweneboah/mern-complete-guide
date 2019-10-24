import React, {useState, useEffect} from 'react'

const CreatVideoForm = (props) => {

    const [video, setVideo ] = useState()
  return (
    <div>
      <h1>Form</h1>
      <form>
         <label>Title: </label>
         <input
         type='text'
         />

        <label>Description: </label>
         <input
         type='text'
         />
        
         <div>
         <button>Submit</button>
         </div>
      </form>
    </div>
  )
}

export default CreatVideoForm
