import { GlobalStyle } from "@/styles/GlobalStyle";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <GlobalStyle />
            <LayoutBlock>{children}</LayoutBlock>
        </>
    );
}

const LayoutBlock = styled.div``;
