import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open, onClose}) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open])

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="w-screen h-screen px-8 py-20 rounded-md">
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}