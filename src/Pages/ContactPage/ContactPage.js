// @flow

import React, { Component } from 'react'

import { GridXContainer, Cell } from 'Components/Layouts'

class ContactPage extends Component<{}> {
  render() {
    return (
      <GridXContainer exClass="py-xl">
        <Cell span="large-6">
          <h2 className="text-uppercase text-large mb-sm">
            Let's talk together
          </h2>
          <p className="text-muted m-0">
            The streak started in late October. Canelas 2010, an unheralded
            amateur soccer team, suddenly could not stop winning. It went 10
            straight matches without dropping a point.
          </p>
          <h2 className="text-uppercase text-large mb-md mt-lg">
            Send a message
          </h2>
          <form action="/" className="form">
            <div className="mb-md">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form__control" />
            </div>
            <div className="mb-md">
              <label htmlFor="email">Email</label>
              <input type="mail" id="email" className="form__control" />
            </div>
            <div className="mb-md">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="form__control"
              />
            </div>
            <button className="btn btn--secondary text-uppercase">
              Send message
            </button>
          </form>
        </Cell>
        <Cell span="large-6">
          <div className="mb-lg">
            <img src="https://unsplash.it/600/270" alt="map" />
          </div>
          <h2 className="text-uppercase text-large mb-sm">Our address</h2>
          <p className="text-muted mb-md">
            470 Lucy Forks, Patriciafurt, YC7B 3UT
          </p>
          <ul className="mb-md list-unstyled text-muted">
            <li>(0161) 347 8854</li>
            <li>(0117) 900 9463</li>
          </ul>
          <p className="text-muted m-0">example@mail.com</p>
          <h2 className="text-uppercase text-large mb-sm mt-lg">
            Opening hours
          </h2>
          <ul className=" list-unstyled text-muted">
            <li>Monday to Friday: 10am - 9pm</li>
            <li>Saturday & Sunday: 10am - 11pm</li>
          </ul>
        </Cell>
      </GridXContainer>
    )
  }
}

export default ContactPage
