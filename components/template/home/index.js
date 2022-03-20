import Layout from "@components/layout"
import Head from "next/head"
import React from "react"
import { HomeBanner } from "@components/organisms/banner"

export const HomeTemplate = () => {
    return (
        <>
            <Head>
                <title>Omerald | Home</title>
            </Head>
            <Layout>
                <main>
                    <HomeBanner />
                </main>
            </Layout>
        </>
    )
}
