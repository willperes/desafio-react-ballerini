import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProviderProps {
    children: ReactNode;
}

interface ModalContextData {
    isAddModalOpen: boolean;
    isDeleteModalOpen: boolean;
    isEditModalOpen: boolean;
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
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    function openAddModal() {
        setIsAddModalOpen(true);
    }

    function closeAddModal() {
        setIsAddModalOpen(false);
    }

    function openDeleteModal() {
        setIsDeleteModalOpen(true);
    }

    function closeDeleteModal() {
        setIsDeleteModalOpen(false);
    }

    function openEditModal() {
        setIsEditModalOpen(true);
    }

    function closeEditModal() {
        setIsEditModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{
            isAddModalOpen,
            isDeleteModalOpen,
            isEditModalOpen,
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