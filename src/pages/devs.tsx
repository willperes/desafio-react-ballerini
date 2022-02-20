import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { useDevs } from '../hooks/useDevs';
import { useModal } from "../hooks/useModal";
import { Devs as DevsType } from '../utils/types';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { motion } from 'framer-motion';

import { DeleteDeveloperModal } from '../components/DeleteDeveloperModal';
import { EditDeveloperModal } from '../components/EditDeveloperModal';
import { AddDeveloperModal } from "../components/AddDeveloperModal";
import { CustomButton } from "../components/CustomButton";
import { DevCard } from "../components/DevCard";
import { Header } from "../components/Header";

import { AddButtonContainer, Carousel, DevsContainer, NoDevs, Wrapper } from "../styles/pages/devs/styles";

export default function Devs() {
    const [devs, setDevs] = useState<DevsType[]>([]);
    const { openAddModal } = useModal();
    const { devList, setDevList, filteredDevs, handleAddDev } = useDevs();

    const carousel = useRef<HTMLDivElement | null>(null);

    async function fetchDevs() {
        let devsData: DevsType[] = await JSON.parse(localStorage.getItem('@BalleriniDevs: Devs') || '{}');

        if (devsData.length === 0 || Object.keys(devsData).length === 0) {
            handleAddDev(
                {
                    nome: 'Willian Peres',
                    cargo: 'Estagiário Front End',
                    avatar: `https://github.com/willperes.png`,
                    github: 'willperes',
                    linkedin: 'willian-peres-de-oliveira'
                }
            );
            return;
        } else {
            setDevs(devsData);
            setDevList(devsData);
        }
    }

    useEffect(() => {
        fetchDevs();
    }, [])

    useEffect(() => {
        setDevs(devList);
    }, [devList]);

    useEffect(() => {
        setDevs(filteredDevs);
    }, [filteredDevs]);

    function handleLeftClick() {
        if (carousel && carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth + 150;
        }
    }

    function handleRightClick() {
        if (carousel && carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth + 150;
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .75 }}>
            <Head>
                <title>Devs | BalleriniDevs</title>
            </Head>
            <Wrapper>
                <AddDeveloperModal />
                <DeleteDeveloperModal />
                <EditDeveloperModal />
                <Header isSearchVisible={true} />
                <AddButtonContainer>
                    <CustomButton onClick={openAddModal}>Adicionar Desenvolvedor</CustomButton>
                </AddButtonContainer>
                <DevsContainer>
                    {devs && devs.length !== 0 ? (
                        <>
                            <GrFormPrevious
                                className="dev-card-prev"
                                onClick={handleLeftClick}
                                style={(devs && devs.length) > 1 ? { display: 'block' } : { display: 'none' }}
                            />
                            <Carousel ref={carousel}>
                                {devs.map(dev => (
                                    <DevCard className="devs-carousel-card" key={dev.id} devInformation={dev} />
                                ))}
                            </Carousel>
                            <GrFormNext
                                className="dev-card-next"
                                onClick={handleRightClick}
                                style={(devs && devs.length) > 1 ? { display: 'block' } : { display: 'none' }}
                            />
                        </>
                    ) : (
                        <NoDevs>
                            <h1>Não há devs registrados :(</h1>
                            <h2>Clique em <q>Adicionar Desenvolvedor</q> para adicionar seu primeiro dev!</h2>
                        </NoDevs>
                    )}
                </DevsContainer>
            </Wrapper>
        </motion.div>
    );
}