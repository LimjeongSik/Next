import styled from "styled-components";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Next</title>
            </Head>
            <Block>테스트 페이지입니다.</Block>
        </>
    );
}

const Block = styled.div``;
