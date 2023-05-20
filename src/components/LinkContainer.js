import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [links, setLinks] = useState([])
  
  const handleRemove = (index) => {
      const removeLinks = [...links]
      removeLinks.splice(index, 1)
      setLinks(removeLinks)
       
  }


  
  const handleSubmit = (favLink) => {
    setLinks([...links, favLink])
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
