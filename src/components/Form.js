import React, { Component } from "react";

const Form = () => {
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form>
      <input type={'text'} id = {'wheredoyouwanttogo'}/> 

      <input type={'text'} id = {'URL'}/>

      <input type={'submit'} />
    </form>
  )
}

export default Form
