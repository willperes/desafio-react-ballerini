import { useEffect } from "react";

import { FormData } from '../../utils/types';
import { useModal } from "../../hooks/useModal";
import { useForm } from 'react-hook-form';
import { useDevs } from "../../hooks/useDevs";

import { FaUserEdit } from 'react-icons/fa';
import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";
import { ModalFade } from "../ModalFade/ModalFade";

import { ModalWrapper } from "./styles";

export function EditDeveloperModal() {
    const { isEditModalOpen, closeEditModal } = useModal();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { handleEditDev, getSelectedId, getDevById } = useDevs();

    function handleCloseModal(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        reset({ nome: '', cargo: '', github: '', linkedin: '' });
        closeEditModal();
    }

    useEffect(() => {
        if (isEditModalOpen === false) return;

        const devId = getSelectedId();
        const devToEdit = getDevById(devId);

        reset({
            nome: devToEdit?.nome,
            cargo: devToEdit?.cargo,
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
            <ModalFade in={isEditModalOpen}>
                <ModalWrapper>
                    <Box className="edit-modal-box">
                        <div className="edit-modal-title">
                            <FaUserEdit />
                            <h1>Editar Desenvolvedor</h1>
                        </div>
                        <form autoComplete="off" onSubmit={handleSubmit((data) => {
                            handleEditDev({
                                nome: data.nome,
                                cargo: data.cargo,
                                avatar: `https://github.com/${data.github}.png`,
                                github: data.github,
                                linkedin: data.linkedin
                            });
                            reset({ nome: '', cargo: '', github: '', linkedin: '' });
                            closeEditModal();
                        })}>
                            <span>
                                <label>Nome:</label>
                                <input type="text" {...register("nome", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.nome?.message}</p>
                            </span>
                            {/* <span>
                                <label>Avatar:</label>
                                <input type="text" {...register("avatar", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.avatar?.message}</p>
                            </span> */}
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
            </ModalFade>
        </Modal>
    );
}