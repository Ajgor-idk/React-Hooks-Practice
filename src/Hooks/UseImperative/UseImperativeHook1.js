import React, { useRef, useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";

//! This is just another more complex example. If you want to try it import it to the App.js

export function UseImperativeHook1() {
  const [isOpen, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={modalRef.current.focusCloseBtn()}>Focus Close</button>
      <button onClick={modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
      <button onClick={modalRef.current.focusDenyBtn()}>Focus Deny</button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
