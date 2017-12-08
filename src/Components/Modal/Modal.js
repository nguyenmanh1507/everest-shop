// @flow

import React, { Component, Fragment } from 'react'

type Props = {
  /** Modal content */
  children: any,
  /** Action u want modal do when click close button */
  onRequestClose: (e: SyntheticEvent<HTMLElement>) => void,
  /** Modal show by default or not */
  show?: boolean
}

class Modal extends Component<Props> {
  modal: ?HTMLDivElement

  static defaultPropTypes = {
    show: false
  }

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
        {show && (
          <div
            className="modal-backdrop"
            onClick={onRequestClose}
            onWheel={e => {
              e.preventDefault()
            }}
          />
        )}
      </Fragment>
    )
  }
}

export default Modal
