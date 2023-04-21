import React from 'react';

function Form (props) {
  return(
  <form className="Form">
    <div className="Form__fields">
    
      <div className="Form__labels">
        {/* Labels for input fields */}
        <label className="Form__label" htmlFor="firstName">First Name</label>
        <label className="Form__label" htmlFor="lastName">Last Name</label>
        <label className="Form__label" htmlFor="email">Email</label>
        <label className="Form__label" htmlFor="subject">Subject</label>
        <label className="Form__label" htmlFor="comments">Comments</label>
      </div>

      <div className="Form__inputs">
        {/* Show error message if first name is not filled correctly */}
        {props.fnameStatus ?
          <p className="Input__error">Your first name is not filled in correctly</p>:null}
        {/* Input field for first name */}
        <input onChange={(e) => props.fname(e)} className="Form__input" type="text" id="firstName"/>

        {/* Show error message if last name is not filled correctly */}
        {props.lnameStatus ?
          <p className="Input__error">Your last name is not filled in correctly</p>:null}
        {/* Input field for last name */}
        <input onChange={(e) => props.lname(e)} className="Form__input" type="text" id="lastName"/>

        {/* Show error message if email is not filled correctly */}
        {props.emailStatus ?
          <p className="Input__error">Enter a proper email</p>:null}
        {/* Input field for email */}
        <input onChange={(e) => props.handleEmail(e)} className="Form__input" type="text" id="email"/>

        {/* Show error message if subject is not filled correctly */}
        {props.subjectStatus ?
          <p className="Input__error">What do you want to talk about ?</p>:null}
        {/* Input field for subject */}
        <input onChange={(e) => props.subject(e)} className="Form__input" type="text" id="subject"/>

        {/* Text area for comments */}
        <textarea  className="Form__input" id="comments"/>
      </div>
    </div>
    {/* Submit button */}
    <button className="Form__button" type="button" onClick={props.handleForm}>Submit</button>
  </form>
)};

export default Form;
