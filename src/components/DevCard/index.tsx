import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useDevs } from '../../hooks/useDevs';
import { useModal } from '../../hooks/useModal';
import { CustomButton } from '../CustomButton';

import { Container, DevCardButtons, DevCardContent } from "./styles";

interface DevCardProps extends React.HTMLAttributes<HTMLDivElement> {
    devInformation: {
        id: number;
        nome: string;
        cargo: string;
        avatar: string;
        github: string;
        linkedin: string;
    }
}

export function DevCard({ devInformation }: DevCardProps) {
    const { openDeleteModal, openEditModal } = useModal();
    const { setSelectedId } = useDevs();

    return (
        <Container>
            <DevCardContent>
                <header>
                    <div className="dev-card-img-wrapper">
                        <img
                            src={devInformation.avatar}
                            alt={`Avatar de ${devInformation.nome}`}
                            onError={e => e.currentTarget.src="/images/default-user.jpg"}
                        />
                    </div>
                </header>
                <div className="dev-card-content">
                    <h1>{devInformation.nome}</h1>
                    <p>{devInformation.cargo}</p>
                </div>
                <footer>
                    <a href={`https://github.com/${devInformation.github}`} target="_blank" rel="noreferrer"><BsGithub /></a>
                    <a href={`https://linkedin.com/in/${devInformation.linkedin}`} target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <CustomButton>Ver mais</CustomButton>
                </footer>
            </DevCardContent>
            <DevCardButtons>
                <CustomButton className="dev-card-button-edit" onClick={() => {
                    setSelectedId(devInformation.id);
                    openEditModal();
                }}>Editar</CustomButton>
                <CustomButton className="dev-card-button-delete" onClick={() => {
                    setSelectedId(devInformation.id);
                    openDeleteModal();
                }} >Deletar</CustomButton>
            </DevCardButtons>
        </Container>
    );
}