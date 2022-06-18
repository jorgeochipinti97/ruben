import Head from "next/head"
import { Nav } from "../ui"

export const LayoutUser = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav/>
            <main style={{maxWidth:'100vw'}}>
                {children}
            </main>

        </>
    )
}
