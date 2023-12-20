"use client";

import Modal from "@/components/Modal";

const AuthModal = () => {
  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      Auth Modal Children
    </Modal>
  );
};

export default AuthModal;