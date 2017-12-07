// @flow

import React, { Component, Fragment } from 'react'

class AboutPage extends Component<{}> {
  render() {
    return (
      <Fragment>
        <section
          className="bg-gray bg-image text-center py-xxl"
          style={{
            backgroundImage: 'url(https://unsplash.it/1600/900/?image=851)'
          }}
        >
          <h3 className="text-font-secondary text-size-h1 text-white mb-md text-border-dark">
            We make beautiful things
          </h3>
          <p className="m-0 text-border">
            We create awesome design and hope aim to bring <br /> the best
            experience for you
          </p>
        </section>

        <div className="grid-container py-xl">
          <div className="grid-x grid-padding-x">
            <article className="small-4 cell">
              <h2 className="text-uppercase text-size-h3 mb-sm">Who we are?</h2>
              <p className="text-muted m-0">
                Of the dressed hundred from seemed acquiesce address narrow
                parents from up extremely the who we worries have magazine far
                might as of and carpeting partially were different in her too
                their help the quite happiness top business by purer a good it
                of gods first a gift the that.
              </p>
            </article>
            <article className="small-4 cell">
              <h2 className="text-uppercase text-size-h3 mb-sm">What we do?</h2>
              <p className="text-muted m-0">
                He had changes day and include ruining in would pretty train my
                not one agreeable. May on phase with set was of lie absolutely
                much are create its looked a along to to easy confidence but to
                him soft from behavioural to circumstances.
              </p>
            </article>
            <article className="small-4 cell">
              <h2 className="text-uppercase text-size-h3 mb-sm">
                Why we do it!
              </h2>
              <p className="text-muted m-0">
                Normal good the been may is that. In had picked he far able
                little claim never and process and all she clues the readiness
                officers those need more the how was. A detailed very to drops.
                Will he the remodelling our endeavours, to the for parameters
                win such way.
              </p>
            </article>
          </div>
        </div>

        <div className="grid-container text-center mb-xl">
          <div className="grid-x grid-padding-x">
            <div className="small-12 cell">
              <h2 className="text-uppercase text-size-h3 mb-sm">
                Brains Behind Everest
              </h2>
            </div>
            <div className="small-6 small-offset-3 cell">
              <p className="mb-0 text-muted">
                He had changes day and include ruining in would pretty train my
                not one agreeable.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-x">
          <div className="small-3">
            <figure className="card-3">
              <img
                src="https://unsplash.it/300/400?image=1003"
                className="card-3__thumbnail"
                alt="John Doe"
              />
              <figcaption className="card-3__content">
                <div className="card-3__title">Eva D. Dortch</div>
                <div className="card-3__sub-title">Housekeeper</div>
              </figcaption>
            </figure>
          </div>
          <div className="small-3">
            <figure className="card-3">
              <img
                src="https://unsplash.it/300/400?image=1002"
                className="card-3__thumbnail"
                alt="John Doe"
              />
              <figcaption className="card-3__content">
                <div className="card-3__title">Eva D. Dortch</div>
                <div className="card-3__sub-title">Housekeeper</div>
              </figcaption>
            </figure>
          </div>
          <div className="small-3">
            <figure className="card-3">
              <img
                src="https://unsplash.it/300/400?image=1001"
                className="card-3__thumbnail"
                alt="John Doe"
              />
              <figcaption className="card-3__content">
                <div className="card-3__title">Eva D. Dortch</div>
                <div className="card-3__sub-title">Housekeeper</div>
              </figcaption>
            </figure>
          </div>
          <div className="small-3">
            <figure className="card-3">
              <img
                src="https://unsplash.it/300/400?image=1000"
                className="card-3__thumbnail"
                alt="John Doe"
              />
              <figcaption className="card-3__content">
                <div className="card-3__title">Eva D. Dortch</div>
                <div className="card-3__sub-title">Housekeeper</div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="bg-blue py-lg">
          <div className="grid-container cell">
            <div className="d-flex align-items-center justify-content-center">
              <div className="text-white text-large mr-md">
                Any question? Get in touch with us
              </div>
              <button className="btn btn--bordered btn--large btn--rounded text-white text-uppercase text-bold">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AboutPage
