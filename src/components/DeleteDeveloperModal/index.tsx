import { useModal } from "../../hooks/useModal";
import { useDevs } from "../../hooks/useDevs";

import { FaUserMinus } from 'react-icons/fa';
import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";
import { ModalFade } from "../ModalFade/ModalFade";

import { ModalWrapper } from "./styles";

export function DeleteDeveloperModal() {
    const { isDeleteModalOpen, closeDeleteModal } = useModal();
    const { handleDeleteDev, setSelectedId } = useDevs();

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={isDeleteModalOpen}
            onClose={closeDeleteModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <ModalFade in={isDeleteModalOpen}>
                <ModalWrapper>
                    <Box className="delete-modal-box">
                        <div className="delete-modal-title">
                            <FaUserMinus />
                            <h1>Adicionar Desenvolvedor</h1>
                        </div>
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
                    </Box>
                </ModalWrapper>
            </ModalFade>
        </Modal>
    );
}