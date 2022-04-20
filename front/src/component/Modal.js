import React from "react";

function Modal() {
  return (
    <div id="modalbox">
      <div className="modalsub">
          <div class="modal fade show" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-modal="true" role="dialog">
              <div class="modal-dialog modal-fullscreen" >
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title h4" id="exampleModalFullscreenLabel">모달창</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.modalFn}></button>
                      </div>
                      <div class="modal-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>    
  );
}

export default Modal;