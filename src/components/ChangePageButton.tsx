import { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

const ChangePageButton = (args: {
  text: string;
  page: string;
  className?: string;
  prompt?: boolean;
  beforeChange?: () => boolean;
  afterChange?: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const buttonClicked = () => {
    if (args.beforeChange) {
      if (!args.beforeChange()) {
        return;
      }
    }

    navigate(args.page);

    if (args.afterChange) {
      args.afterChange();
    }
  };

  const prompt = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSucessCloseModal = () => {
    handleCloseModal();
    buttonClicked();
  };

  return (
    <div className={`card ${args.className}`}>
      <button onClick={args.prompt ? prompt : buttonClicked}>
        {args.text}
      </button>
      {args.prompt ? (
        <ReactModal
          className="end-modal"
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <p>some text</p>
          <p>
            <button onClick={handleSucessCloseModal}>Confirm</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </p>
        </ReactModal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChangePageButton;
