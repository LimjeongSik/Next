import styled from "styled-components";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Next</title>
            </Head>
            <Block>메인페이지 테스트입니다.</Block>
        </>
    );
}

const Block = styled.div``;
