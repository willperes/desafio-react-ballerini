import Head from 'next/head';
import { useEffect, useState } from 'react';

import { useDevs } from '../src/hooks/useDevs';
import { useModal } from "../src/hooks/useModal";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import { DeleteDeveloperModal } from '../src/components/DeleteDeveloperModal';
import { EditDeveloperModal } from '../src/components/EditDeveloperModal';
import { AddDeveloperModal } from "../src/components/AddDeveloperModal";
import { CustomButton } from "../src/components/CustomButton";
import { DevCard } from "../src/components/DevCard";
import { Header } from "../src/components/Header";

import { AddButtonContainer, DevsContainer, NoDevs, Wrapper } from "../src/styles/pages/devs/styles";

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
    const { devList, filteredDevs, handleAddDev } = useDevs();

    useEffect(() => {
        let devs: Devs[] = [];

        if (localStorage.hasOwnProperty('@BalleriniDevs: Devs')) {
            devs = JSON.parse(localStorage.getItem('@BalleriniDevs: Devs') || '{}');
        }

        if (devs.length === 0) {
            handleAddDev(
                {
                    nome: 'Willian Peres',
                    cargo: 'Estagiário Front End',
                    avatar: 'https://avatars.githubusercontent.com/u/64440935?v=4',
                    github: 'https://github.com/willperes',
                    linkedin: 'https://www.linkedin.com/in/willian-peres-de-oliveira/'
                }
            );
        }
    }, []);

useEffect(() => {
    setDevs(devList);
}, [devList]);

useEffect(() => {
    setDevs(filteredDevs);
}, [filteredDevs]);

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
                        <GrFormPrevious className="dev-card-prev" />
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={devs.length === 2 || devs.length === 1 ? 0 : 150}
                            navigation={{
                                nextEl: '.dev-card-next',
                                prevEl: '.dev-card-prev'
                            }}
                            modules={[Navigation]}
                        >
                            {devs.map(dev => (
                                <SwiperSlide key={dev.id}>
                                    <DevCard devInformation={dev} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <GrFormNext className="dev-card-next" />
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