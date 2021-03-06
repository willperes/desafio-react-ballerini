import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

import { Devs } from '../utils/types';

interface DevsProviderProps {
    children: ReactNode;
}

interface DevsContextData {
    handleAddDev: (devData: DevData) => void;
    handleDeleteDev: () => void;
    handleEditDev: (devData: DevData) => void;
    getSelectedId: () => number;
    getDevById: (id: number) => Devs | undefined;
    setSelectedId: Dispatch<SetStateAction<number>>;
    setDevList: Dispatch<SetStateAction<Devs[]>>;
    filterDevs: (input: string) => void;
    devList: Array<Devs>;
    filteredDevs: Array<Devs>;
}

interface DevData {
    nome: string;
    cargo: string;
    avatar: string;
    github: string;
    linkedin: string;
}

const DevsContext = createContext<DevsContextData>(
    {} as DevsContextData
);

export function DevsProvider({ children }: DevsProviderProps) {
    const [devList, setDevList] = useState<Devs[]>([]);
    const [filteredDevs, setFilteredDevs] = useState<Devs[]>([]);
    const [selectedId, setSelectedId] = useState(0);

    function handleAddDev(devData: DevData) {
        let devs: Devs[] = [];

        if (localStorage.hasOwnProperty('@BalleriniDevs: Devs')) {
            devs = JSON.parse(localStorage.getItem('@BalleriniDevs: Devs') || '{}');
        }

        function generateId() {
            if (devs.length === 0) return 1;

            const ids = devs.map(dev => {
                return dev.id;
            })

            return Math.max(...ids) + 1;
        }

        const id = generateId();

        devs.push({
            id,
            nome: devData.nome,
            cargo: devData.cargo,
            avatar: devData.avatar,
            github: devData.github,
            linkedin: devData.linkedin,
        })

        localStorage.setItem('@BalleriniDevs: Devs', JSON.stringify(devs));
        setDevList(devs);
    }

    function handleDeleteDev() {
        const devs = devList;
        const id = selectedId;

        const devsFiltered = devs.filter(dev => dev.id !== id);

        setDevList(devsFiltered);
        setSelectedId(0);
        localStorage.setItem('@BalleriniDevs: Devs', JSON.stringify(devsFiltered));
    }

    function handleEditDev(devData: DevData) {
        const devs = devList;
        const id = selectedId;

        console.log(devData);

        const devsFiltered = [...devs];

        for (let i = 0; i < devsFiltered.length; i++) {
            if (devsFiltered[i].id === id) {
                devsFiltered[i] = {
                    id,
                    nome: devData.nome,
                    avatar: devData.avatar,
                    cargo: devData.cargo,
                    github: devData.github,
                    linkedin: devData.linkedin
                };
            }
        }

        setDevList(devsFiltered);
        setSelectedId(0);
        localStorage.setItem('@BalleriniDevs: Devs', JSON.stringify(devsFiltered));
    }

    function getSelectedId() {
        return selectedId;
    }

    function getDevById(id: number) {
        const devs = devList;

        for (let dev of devs) {
            if (dev.id === id) return dev;
        }
    }

    function filterDevs(input: string) {
        const devs = devList;

        if (input === '') setFilteredDevs(devs);

        const devsFiltered = devs.filter(dev => dev.nome.toLowerCase().includes(input.toLowerCase()));

        setFilteredDevs(devsFiltered);
    }

    return (
        <DevsContext.Provider value={{
            handleAddDev,
            handleDeleteDev,
            handleEditDev,
            getSelectedId,
            getDevById,
            setSelectedId,
            setDevList,
            filterDevs,
            devList,
            filteredDevs
        }}>
            {children}
        </DevsContext.Provider>
    );
}

export function useDevs() {
    const context = useContext(DevsContext);
    return context;
}