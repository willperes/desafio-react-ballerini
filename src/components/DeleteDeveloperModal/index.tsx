import { useModal } from "../../hooks/useModal";

import { ModalWrapper } from "./styles";
import { useDevs } from "../../hooks/useDevs";
import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";
import { ModalFade } from "../ModalFade";

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
                    <Box className="add-modal-box">
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
                    </Box>
                </ModalWrapper>
            </ModalFade>
        </Modal>
    );
}