import Link from "next/link";
import { useDevs } from "../../hooks/useDevs";
import { useModal } from "../../hooks/useModal";
import { MenuModal } from "../MenuModal";
import { HeaderContainer, HeaderMobile, InputWrapper, Logo, NavIcons } from "./styles";

interface HeaderProps {
    isSearchVisible: boolean;
}

export function Header({ isSearchVisible }: HeaderProps) {
    const { openMenuModal } = useModal();
    const { filterDevs } = useDevs();

    function handleSearch(value: string) {
        filterDevs(value);
    }

    return (
        <>
            <MenuModal />
            <HeaderContainer>
                <NavIcons>
                    <a href='https://www.linkedin.com/company/comunidadeballerini/' target="_blank" rel="noreferrer">
                        <img src='images/linkedin.svg' alt="LinkedIn logo" />
                    </a>
                    <img src='images/facebook.svg' alt="Facebook logo" />
                    <a href='https://discord.gg/ballerini' target="_blank" rel="noreferrer">
                        <img src='images/discord.svg' alt="Discord logo" />
                    </a>
                </NavIcons>
                <Link href={'/'} passHref>
                    <Logo>
                        <img src='images/ballerini-logo.svg' alt="Ballerini Devs logo" />
                        <h1>Ballerini Devs</h1>
                    </Logo>
                </Link>
                <InputWrapper>
                    <input
                        onChange={e => {
                            handleSearch(e.target.value);
                        }}
                        placeholder={'Buscar'}
                        style={{ visibility: isSearchVisible ? 'visible' : 'hidden' }}
                        type='text'
                    />
                </InputWrapper>
            </HeaderContainer>
            <HeaderMobile>
                <Logo onClick={openMenuModal}>
                    <img src='images/ballerini-logo.svg' alt="Ballerini Devs logo" />
                    <h1>Ballerini Devs</h1>
                </Logo>
                <InputWrapper>
                    <input
                        onChange={e => {
                            handleSearch(e.target.value);
                        }}
                        placeholder={'Buscar'}
                        style={{ visibility: isSearchVisible ? 'visible' : 'hidden' }}
                        type='text'
                    />
                </InputWrapper>
            </HeaderMobile>
        </>
    );
}