import { useModal } from "../../hooks/useModal";
import { useForm } from 'react-hook-form';

import { ModalWrapper } from "./styles";
import { useDevs } from "../../hooks/useDevs";

import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";
import { ModalFade } from "../ModalFade";

interface FormData {
    nome: string;
    cargo: string;
    avatar: string;
    github: string;
    linkedin: string;
}

export function AddDeveloperModal() {
    const { isAddModalOpen, closeAddModal } = useModal();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { handleAddDev } = useDevs();

    function handleCloseModal(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        reset({ nome: '', cargo: '', avatar: '', github: '', linkedin: '' });
        closeAddModal();
    }

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={isAddModalOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <ModalFade in={isAddModalOpen}>
                <ModalWrapper>
                    <Box className="add-modal-box">
                        <h1>Adicionar desenvolvedor</h1>
                        <form autoComplete="off" onSubmit={handleSubmit((data) => {
                            handleAddDev(data);
                            reset({ nome: '', cargo: '', avatar: '', github: '', linkedin: '' });
                            closeAddModal();
                        })}>
                            <span className='add-modal-form-section'>
                                <label>Nome:</label>
                                <input type="text" {...register("nome", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.nome?.message}</p>
                            </span>
                            <span className='add-modal-form-section'>
                                <label>Avatar:</label>
                                <input type="text" {...register("avatar", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.avatar?.message}</p>
                            </span>
                            <span className='add-modal-form-section'>
                                <label>Cargo:</label>
                                <input type="text" {...register("cargo", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.cargo?.message}</p>
                            </span>
                            <span className='add-modal-form-section'>
                                <label>Usuário do GitHub:</label>
                                <input type="text" placeholder="https://github.com/" {...register("github", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.github?.message}</p>
                            </span>
                            <span className='add-modal-form-section'>
                                <label>Usuário do LinkedIn:</label>
                                <input type="text" placeholder="https://linkedin.com/in/" {...register("linkedin", { required: 'Este campo é obrigatório.' })} />
                                <p>{errors.nome?.message}</p>
                            </span>
                            <div className="add-dev-modal-buttons">
                                <button onClick={e => handleCloseModal(e)}>Cancelar</button>
                                <button type="submit">Adicionar</button>
                            </div>
                        </form>
                    </Box>
                </ModalWrapper>
            </ModalFade>
        </Modal>
    );
}