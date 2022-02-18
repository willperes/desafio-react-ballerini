import { forwardRef, useEffect } from "react";

import { useModal } from "../../hooks/useModal";
import { useForm } from 'react-hook-form';

import { ModalWrapper } from "./styles";
import { useDevs } from "../../hooks/useDevs";

import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";
import { useSpring, animated } from 'react-spring';

interface FormData {
    nome: string;
    cargo: string;
    avatar: string;
    github: string;
    linkedin: string;
}

interface Dev {
    id: number;
    nome: string;
    cargo: string;
    avatar: string;
    github: string;
    linkedin: string;
}

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

export function EditDeveloperModal() {
    const { isEditModalOpen, closeEditModal } = useModal();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { handleEditDev, getSelectedId, getDevById } = useDevs();

    function handleCloseModal(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        reset({ nome: '', cargo: '', avatar: '', github: '', linkedin: '' });
        closeEditModal();
    }

    useEffect(() => {
        if (isEditModalOpen === false) return;

        const devId = getSelectedId();
        const devToEdit = getDevById(devId);

        reset({
            nome: devToEdit?.nome,
            cargo: devToEdit?.cargo,
            avatar: devToEdit?.avatar,
            github: devToEdit?.github,
            linkedin: devToEdit?.linkedin
        });
    }, [isEditModalOpen]);

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={isEditModalOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isEditModalOpen}>
                <ModalWrapper>
                    <Box className="edit-modal-box">
                        <h1>Editar desenvolvedor</h1>
                        <form autoComplete="off" onSubmit={handleSubmit((data) => {
                            handleEditDev(data);
                            reset({ nome: '', cargo: '', avatar: '', github: '', linkedin: '' });
                            closeEditModal();
                        })}>
                            <span>
                                <label>Nome:</label>
                                <input type="text" {...register("nome", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.nome?.message}</p>
                            </span>
                            <span>
                                <label>Avatar:</label>
                                <input type="text" {...register("avatar", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.avatar?.message}</p>
                            </span>
                            <span>
                                <label>Cargo:</label>
                                <input type="text" {...register("cargo", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.cargo?.message}</p>
                            </span>
                            <span>
                                <label>GitHub:</label>
                                <input type="text" {...register("github", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.github?.message}</p>
                            </span>
                            <span>
                                <label>LinkedIn:</label>
                                <input type="text" {...register("linkedin", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.nome?.message}</p>
                            </span>
                            <div className="edit-dev-modal-buttons">
                                <button onClick={e => handleCloseModal(e)}>Cancelar</button>
                                <button type="submit">Editar</button>
                            </div>
                        </form>
                    </Box>
                </ModalWrapper>
            </Fade>
        </Modal>
    );
}