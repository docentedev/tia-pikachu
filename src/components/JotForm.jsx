import * as React from 'react'
import "./JotForm.css"

const JotForm = ({ show, setShow }) => {
  return show ? (
    <div className="modal-form modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">La opinión del pueblo sera mi opinión</h5>
            <button onClick={() => setShow(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <iframe
              title="Giovanna Grandón Distrito 12"
              allowtransparency="true"
              allowfullscreen="true"
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/210586961239059"
              frameborder="0"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  ) : <span />
}

export default JotForm
