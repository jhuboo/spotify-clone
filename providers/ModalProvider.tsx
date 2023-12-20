"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This is a hack to prevent the "window is not defined" error during SSR.
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <Modal />
    </>
  );
};

export default ModalProvider;
