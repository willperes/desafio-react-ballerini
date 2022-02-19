import Link from "next/link";
import { CustomButton } from "../CustomButton";
import { HeroContainer, Content, ImageWrapper, Wrapper } from "./styles";

export function Hero({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <HeroContainer className={className}>
            <Wrapper>
                <Content>
                    <h1>O maior banco de devs do Brasil</h1>
                    <p>Não importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                    <Link href={'/devs'}><span><CustomButton>Entre agora</CustomButton></span></Link>
                </Content>
                <ImageWrapper>
                    <img src="/images/programador-main.svg" alt="Pessoa sentada em um sofá com um notebook em seu colo." />
                </ImageWrapper>
            </Wrapper>
        </HeroContainer>
    );
}