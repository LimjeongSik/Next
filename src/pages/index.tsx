import styled from "styled-components";
import Image from "next/image";
import { prefix } from "../../config/config";

export default function Home() {
    return (
        <Block>
            <Image
                src={`${prefix}/images/ic__logo.png`}
                width={31}
                height={26}
                alt="로고"
                priority
            />
            <h2>메인페이지 테스트입니다.</h2>
            <br />
            <h3>MainPage Test</h3>
        </Block>
    );
}

const Block = styled.div`
    background: red;
`;
