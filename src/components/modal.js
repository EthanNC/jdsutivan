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
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-scroll fixed inset-0 z-100 outline-none focus:outline-none">
              <div className="relative w-3/4 mt-8 max-w-3xl">
                {/*header*/}
                <div className=" bg-secondary text-white border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.header}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                  {/*content*/}
                  {props.children}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
          </>
        ) : null}
      </>
    );
  })

export default Modal

