import { useModal } from "../../hooks/useModal";
import { useForm } from 'react-hook-form';

import Modal from 'react-modal';
import { ModalContent } from "./styles";
import { useDevs } from "../../hooks/useDevs";

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

    function handleCloseModal() {
        reset({ nome: '', cargo: '', avatar: '', github: '', linkedin: ''});
        closeAddModal();
    }

    return (
        <Modal
            isOpen={isAddModalOpen}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-add-modal-content"
            ariaHideApp={false}
        >
            <ModalContent>
                <h1>Adicionar desenvolvedor</h1>
                <form onSubmit={handleSubmit((data) => {
                    handleAddDev(data);
                    reset({ nome: '', cargo: '', avatar: '', github: '', linkedin: ''});
                    closeAddModal();
                })}>
                    <label>Nome:</label>
                    <input type="text" {...register("nome", { required: 'Este campo é obrigatório.' })} />
                    <p>{errors.nome?.message}</p>
                    <label>Avatar:</label>
                    <input type="text" {...register("avatar", { required: 'Este campo é obrigatório.' })} />
                    <p>{errors.avatar?.message}</p>
                    <label>Cargo:</label>
                    <input type="text" {...register("cargo", { required: 'Este campo é obrigatório.' })} />
                    <p>{errors.cargo?.message}</p>
                    <label>GitHub:</label>
                    <input type="text" {...register("github", { required: 'Este campo é obrigatório.' })} />
                    <p>{errors.github?.message}</p>
                    <label>LinkedIn:</label>
                    <input type="text" {...register("linkedin", { required: 'Este campo é obrigatório.' })} />
                    <p>{errors.nome?.message}</p>
                    <div className="add-dev-modal-buttons">
                        <button onClick={handleCloseModal}>Cancelar</button>
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </ModalContent>
        </Modal>
    );
}