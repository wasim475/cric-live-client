import React from "react";

const EditBowler = () => {
  return (
    <>
      {/* Button to open the modal */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Open Modal
      </button>

      {/* Modal Component */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default EditBowler;
