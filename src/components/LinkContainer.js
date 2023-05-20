import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [links, setLinks] = useState([])
  
  const handleRemove = (index) => {
    setLinks([index])
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       
  }


  
  const handleSubmit = (favLink) => {
    
    setLinks([...links, favLink])
    // postLink(favLink) 
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={links} removeLink={handleRemove} /> 
      <br />
      <h3>Add New</h3>
      <Form notifyParent = {handleSubmit}/> 
    </div>
  )
}

export default LinkContainer
