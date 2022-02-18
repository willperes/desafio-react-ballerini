import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { useDevs } from '../hooks/useDevs';
import { useModal } from "../hooks/useModal";

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import { DeleteDeveloperModal } from '../components/DeleteDeveloperModal';
import { EditDeveloperModal } from '../components/EditDeveloperModal';
import { AddDeveloperModal } from "../components/AddDeveloperModal";
import { CustomButton } from "../components/CustomButton";
import { DevCard } from "../components/DevCard";
import { Header } from "../components/Header";

import { AddButtonContainer, Carousel, DevsContainer, DevsWrapper, NoDevs, Wrapper } from "../styles/pages/devs/styles";

interface Devs {
    id: number;
    nome: string;
    cargo: string;
    avatar: string;
    github: string;
    linkedin: string;
}

export default function Devs() {
    const [devs, setDevs] = useState<Devs[]>([]);
    const { openAddModal } = useModal();
    const { devList, setDevList, filteredDevs, handleAddDev } = useDevs();

    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        async function fetchDevs() {
            let devsData: Devs[] = await JSON.parse(localStorage.getItem('@BalleriniDevs: Devs') || '{}');

            if (devsData.length === 0 || Object.keys(devsData).length === 0) {
                handleAddDev(
                    {
                        nome: 'Willian Peres',
                        cargo: 'Estagiário Front End',
                        avatar: 'https://avatars.githubusercontent.com/u/64440935?v=4',
                        github: 'https://github.com/willperes',
                        linkedin: 'https://www.linkedin.com/in/willian-peres-de-oliveira/'
                    }
                );
                return;
            } else {
                setDevs(devsData);
                setDevList(devsData);
            }
        }

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
        <>
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
                        <DevsWrapper>
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
                        </DevsWrapper>
                    ) : (
                        <NoDevs>
                            <h1>Não há devs registrados :(</h1>
                        </NoDevs>
                    )}
                </DevsContainer>
            </Wrapper>
        </>
    );
}