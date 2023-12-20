import { create } from 'zustand';

interface AuthModalState {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const useAuthModal = create<AuthModalState>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));

export default useAuthModal;