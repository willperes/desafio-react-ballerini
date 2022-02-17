import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { useDevs } from '../src/hooks/useDevs';
import { useModal } from "../src/hooks/useModal";

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import { DeleteDeveloperModal } from '../src/components/DeleteDeveloperModal';
import { EditDeveloperModal } from '../src/components/EditDeveloperModal';
import { AddDeveloperModal } from "../src/components/AddDeveloperModal";
import { CustomButton } from "../src/components/CustomButton";
import { DevCard } from "../src/components/DevCard";
import { Header } from "../src/components/Header";

import { AddButtonContainer, Carousel, DevsContainer, NoDevs, Wrapper } from "../src/styles/pages/devs/styles";

import "swiper/css";
import "swiper/css/navigation"

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
                        <>
                            <GrFormPrevious className="dev-card-prev" onClick={handleLeftClick} />
                            <Carousel ref={carousel}>
                                {devs.map(dev => (
                                    <DevCard className="devs-carousel-card" devInformation={dev} />
                                ))}
                            </Carousel>
                            <GrFormNext className="dev-card-next" onClick={handleRightClick} />
                        </>
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