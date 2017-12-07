// @flow

import React, { Component, Fragment } from 'react'

type Props = {
  children: any,
  onRequestClose: (e: SyntheticEvent<HTMLElement>) => void,
  show?: boolean
}

class Modal extends Component<Props> {
  modal: ?HTMLDivElement

  handleOnWheel = (e: SyntheticWheelEvent<>) => {
    if (this.modal) {
      const delta = e.deltaY
      this.modal.scrollTop += (delta < 0 ? -1 : 1) * 30
      e.preventDefault()
    }
  }

  render() {
    const { onRequestClose, children, show } = this.props

    return (
      <Fragment>
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          onWheel={this.handleOnWheel}
          style={{ display: show ? 'block' : null }}
          ref={el => {
            this.modal = el
          }}
        >
          <div className="modal__dialog" role="document">
            <div className="modal__content">
              <div className="modal__body">{children}</div>
              <button
                type="button"
                className="modal__btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onRequestClose}
              >
                <i className="fa fa-times fa-lg" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal-backdrop"
          onClick={onRequestClose}
          onWheel={e => {
            e.preventDefault()
          }}
        />
      </Fragment>
    )
  }
}

export default Modal
