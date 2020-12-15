import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-lg outline primary btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {/* {triggerText} */}
      Добавить
    </button>
  );
};
export default Trigger;
