import Link from "next/link";
import { useDevs } from "../../hooks/useDevs";
import { HeaderContainer, InputWrapper, Logo, NavIcons } from "./styles";

interface HeaderProps {
    isSearchVisible: boolean;
}

export function Header({ isSearchVisible }: HeaderProps) {
    const { filterDevs } = useDevs();

    function handleSearch(value: string) {
        filterDevs(value);
    }

    return (
        <HeaderContainer>
            <NavIcons>
                <img src='images/linkedin.svg' alt="LinkedIn logo" />
                <img src='images/facebook.svg' alt="Facebook logo" />
                <img src='images/discord.svg' alt="Discord logo" />
            </NavIcons>
            <Link href={'/'}>
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
    );
}