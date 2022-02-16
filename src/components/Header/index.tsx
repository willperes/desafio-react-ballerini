import Link from "next/link";
import { useDevs } from "../../hooks/useDevs";
import { HeaderContainer, Logo, NavIcons } from "./styles";

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
                <img src='images/linkedin.svg' />
                <img src='images/facebook.svg' />
                <img src='images/discord.svg' />
            </NavIcons>
            <Link href={'/'}>
                <Logo>
                    <img src='images/ballerini-logo.svg' />
                    <h1>Ballerini Devs</h1>
                </Logo>
            </Link>
            <input
                onChange={e => {
                    handleSearch(e.target.value);
                }}
                className="header-search-input"
                placeholder={'Buscar'}
                style={{ visibility: isSearchVisible ? 'visible' : 'hidden' }}
                type='text'
            />
        </HeaderContainer>
    );
}