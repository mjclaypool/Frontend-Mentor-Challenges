import { useState } from "react";
import Modal from "./Modal";
import rules from "../assets/image-rules.svg";
import closeIcon from "../assets/icon-close.svg";

export default function Rules() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div>
        <button
          type='button'
          onClick={() => setModalOpen(true)}
          className="font-barlow font-bold px-8 py-2 my-4 text-stone-300 border-2 border-stone-300 rounded-md tracking-wider"
        >
          RULES
        </button>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="h-[100%] flex flex-col items-center justify-between">
          <h2 className="font-barlow font-bold text-3xl">RULES</h2>
          <img src={rules} />
          <div>
            <img src={closeIcon} onClick={() => setModalOpen(false)} className="p-4 cursor-pointer" />
          </div>
        </div>
      </Modal>
    </>
  )
}