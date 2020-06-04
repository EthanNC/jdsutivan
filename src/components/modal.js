import React, {forwardRef, useImperativeHandle} from "react";

 const Modal = forwardRef((props,ref) => {
  const [showModal, setShowModal] = React.useState(false);

  const cleanModal = () => {
    setShowModal(true);
  };

  useImperativeHandle(ref, () => {
     return {
      cleanModal: cleanModal
     }
  });

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form className=" bg-secondary text-white border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Contact Us
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                        </label>
                        <input name="first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="Jane"/>
                        
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                        </label>
                        <input name="last-name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Doe"/>
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                        E-mail
                        </label>
                        <input name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                        
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                        Message
                        </label>
                        <textarea name="message" class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        
                    </div>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-primary text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Sumbit 
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
        </>
      ) : null}
    </>
  );
})

export default Modal
