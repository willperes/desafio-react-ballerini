import { useModal } from "../../hooks/useModal";

import Modal from 'react-modal';
import { ModalContent } from "./styles";
import { useDevs } from "../../hooks/useDevs";

export function DeleteDeveloperModal() {
    const { isDeleteModalOpen, closeDeleteModal } = useModal();
    const { handleDeleteDev, setSelectedId } = useDevs();

    return (
        <Modal
            isOpen={isDeleteModalOpen}
            onRequestClose={closeDeleteModal}
            overlayClassName="react-modal-overlay"
            className="react-add-modal-content"
            ariaHideApp={false}
        >
            <ModalContent>
                <h1>Deletar desenvolvedor</h1>
                <p>Tem certeza que deseja deletar este desenvolvedor?</p>
                <div className="delete-dev-modal-buttons">
                    <button onClick={() => {
                        closeDeleteModal();
                        setSelectedId(0);
                    }} >Cancelar</button>
                    <button className="delete-dev-modal-button-delete" onClick={() => {
                        handleDeleteDev();
                        closeDeleteModal();
                    }} >Deletar</button>
                </div>
            </ModalContent>
        </Modal>
    );
}