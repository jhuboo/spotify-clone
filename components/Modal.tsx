import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onChange}
    >
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0">
          <Dialog.Content className="fixed drop-shadow-md border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
            <Dialog.Title className="text-xl text-center font-bold mb-4">
              {title}
            </Dialog.Title>
            <Dialog.Description className="mb-5 text-sm leading-normal text-center">
              {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button className="absolute right-[5px] top-[5px] mt-3 mr-3 text-neutral-400 hover:text-white roundef-full appearance-none inline-flex justify-center items-center">
                <IoMdClose className="text-2xl" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
