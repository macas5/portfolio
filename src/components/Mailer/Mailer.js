// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

import './Mailer.css'

export default class MailMe extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    const { mailerText } = this.props;
    return (
      <form
        data-aos='zoom-in'
        id='contact-form'
        className={'flex flex-wrap w-100 mw5 ma3 ' + this.props.className}
        onSubmit={this.submitForm}
        action="https://formspree.io/myynqewv"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        <label className='w-100 tl'>{mailerText.email}:
          <input className ='w-100 black bg-white' type="email" name="email" width='25rem' />
        </label>
        <label className='w-100 tl mt3'>{mailerText.message}: <br/>
          <textarea className ='black bg-white w-100' type="text" name="message" rows='4' cols='25'/>
        </label>
        {status === "SUCCESS" ? <p className='center ma2'>{mailerText.success}</p> : 
          <button className='center ma2 button-blue grow'>{mailerText.submit}</button>}
        {status === "ERROR" && <p>{mailerText.error}</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}