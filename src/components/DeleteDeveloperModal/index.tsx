import { forwardRef } from "react";

import { useModal } from "../../hooks/useModal";

import { ModalWrapper } from "./styles";
import { useDevs } from "../../hooks/useDevs";
import { animated, useSpring } from "react-spring";
import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} className="add-dev-modal" {...other}>
            {children}
        </animated.div>
    );
});

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
            <Fade in={isDeleteModalOpen}>
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
            </Fade>
        </Modal>
    );
}