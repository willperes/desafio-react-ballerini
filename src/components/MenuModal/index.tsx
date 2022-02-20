import Link from "next/link";
import { useModal } from "../../hooks/useModal";

import { ModalWrapper } from "./styles";
import { FaHome, FaDiscord, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import Backdrop from '@mui/material/Backdrop';
import { Box, Modal } from "@mui/material";
import { MenuFade } from "../ModalFade/MenuFade";

export function MenuModal() {
    const { isMenuModalOpen, closeMenuModal } = useModal();

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={isMenuModalOpen}
            onClose={closeMenuModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <MenuFade in={isMenuModalOpen}>
                <ModalWrapper>
                    <div className="menu-modal-close" onClick={closeMenuModal}>
                        <IoMdClose />
                    </div>
                    <Box className="menu-modal-box">
                        <ul>
                            <Link href={'/'} passHref><li onClick={closeMenuModal}><FaHome /><a>Início</a></li></Link>
                            <li onClick={closeMenuModal}><FaLinkedin />
                                <a href='https://www.linkedin.com/company/comunidadeballerini/' target="_blank" rel="noreferrer">Linkedin</a>
                            </li>
                            <Link href={'/'} passHref><li onClick={closeMenuModal}><FaFacebook /><a>Facebook</a></li></Link>
                            <li onClick={closeMenuModal}><FaDiscord />
                                <a href='https://discord.gg/ballerini' target="_blank" rel="noreferrer">Discord</a>
                            </li>
                        </ul>
                    </Box>
                </ModalWrapper>
            </MenuFade>
        </Modal>
    );
}