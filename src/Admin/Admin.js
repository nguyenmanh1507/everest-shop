// @flow

import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Admin extends Component<{}> {
  render() {
    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">
              Dashboard
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Overview <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Analytics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Export
                  </a>
                </li>
              </ul>

              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nav item
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nav item again
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    One more nav
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Another nav item
                  </a>
                </li>
              </ul>

              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nav item again
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    One more nav
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Another nav item
                  </a>
                </li>
              </ul>
            </nav>

            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <h1>Dashboard</h1>
            </main>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Admin
