import React from "react";

function Modal() {
  return (
    <div id="modalbox">
      <div className="modalsub">
          <div className="modal fade show" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-modal="true" role="dialog">
              <div className="modal-dialog modal-fullscreen" >
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title h4" id="exampleModalFullscreenLabel">모달창</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.modalFn}></button>
                      </div>
                      <div className="modal-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>    
  );
}

export default Modal;