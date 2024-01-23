// components/atoms/Modal/ReusableModal.tsx

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

interface ReusableModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  content: React.ReactNode;
  autoOpenDelay?: number; // Modalın avtomatik açılma gecikməsi (ms cinsində)
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onRequestClose,
  title,
  content,
  autoOpenDelay = 500,
}) => {
  const [shouldOpen, setShouldOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen && !shouldOpen) {
      timeoutId = setTimeout(() => {
        setShouldOpen(true);
      }, autoOpenDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [autoOpenDelay, isOpen, shouldOpen]);

  const handleCloseModal = () => {
    onRequestClose();
    setShouldOpen(false);
  };

  return (
    <Modal
      isOpen={shouldOpen}
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="overlay"
    >
      <div>
        <h2>{title}</h2>
        <div>{content}</div>
        <button onClick={handleCloseModal} className="bg-blue-500 text-white px-4 py-2 mt-4">
          Bağla
        </button>
      </div>
    </Modal>
  );
};

export default ReusableModal;
