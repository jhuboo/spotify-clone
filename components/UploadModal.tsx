"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "@/components/Modal";
import Input from "@/components/Input";
import useUploadModal from "@/hooks/useUploadModal";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false); // [1
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset(); // Reset the form when the modal closes.
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // TODO: Upload the song to supabase.
  };

  return (
    <>
      <Modal
        title="Add a song"
        description="Upload an mp3 file to add to your library."
        isOpen={uploadModal.isOpen}
        onChange={onChange}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <Input
            id="title"
            disabled={isLoading}
            {...register("title", { required: true })}
            placeholder="Song Title"
          />
          <Input
            id="author"
            disabled={isLoading}
            {...register("author", { required: true })}
            placeholder="Song Author"
          />
        </form>
      </Modal>
    </>
  );
};

export default UploadModal;
