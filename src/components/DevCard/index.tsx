import { useDevs } from '../../hooks/useDevs';
import { useModal } from '../../hooks/useModal';
import { Devs } from '../../utils/types';

import { CustomButton } from '../CustomButton';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { Tooltip } from '@mui/material';

import { Container, DevCardButtons, DevCardContent } from "./styles";

interface DevCardProps extends React.HTMLAttributes<HTMLDivElement> {
    devInformation: Devs
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
                            onError={e => e.currentTarget.src = "/images/default-user.jpg"}
                        />
                        <Tooltip title="Desenvolvedor" arrow>
                            <div className="dev-card-verified-badge" style={{ display: devInformation.github === 'willperes' ? 'block' : 'none' }}>
                                <GoVerified />
                            </div>
                        </Tooltip>
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