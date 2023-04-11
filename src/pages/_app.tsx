import "../styles/font.css";
import type { AppProps } from "next/app";
import { PortfolioProvider } from "../../context/context";
import { prefix } from "../../config/config";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PortfolioProvider value={{ prefix }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </PortfolioProvider>
    );
}
