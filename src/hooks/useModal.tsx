import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProviderProps {
    children: ReactNode;
}

interface ModalContextData {
    isMenuModalOpen: boolean;
    isAddModalOpen: boolean;
    isDeleteModalOpen: boolean;
    isEditModalOpen: boolean;
    openMenuModal: () => void;
    closeMenuModal: () => void;
    openAddModal: () => void;
    closeAddModal: () => void;
    openDeleteModal: () => void;
    closeDeleteModal: () => void;
    openEditModal: () => void;
    closeEditModal: () => void;
}

const ModalContext = createContext<ModalContextData>(
    {} as ModalContextData
);

export function ModalProvider({ children }: ModalProviderProps) {
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openMenuModal = () => { setIsMenuModalOpen(true) }

    const closeMenuModal = () => setIsMenuModalOpen(false)

    const openAddModal = () => { setIsAddModalOpen(true) }

    const closeAddModal = () => { setIsAddModalOpen(false) }

    const openDeleteModal = () => { setIsDeleteModalOpen(true) }

    const closeDeleteModal = () => { setIsDeleteModalOpen(false) }

    const openEditModal = () => { setIsEditModalOpen(true) }

    const closeEditModal = () => { setIsEditModalOpen(false) }

    return (
        <ModalContext.Provider value={{
            isMenuModalOpen,
            isAddModalOpen,
            isDeleteModalOpen,
            isEditModalOpen,
            openMenuModal,
            closeMenuModal,
            openAddModal,
            openDeleteModal,
            openEditModal,
            closeAddModal,
            closeDeleteModal,
            closeEditModal
        }}>
            { children }
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}