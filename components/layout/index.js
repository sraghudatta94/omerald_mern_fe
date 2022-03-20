import React from "react"
import Head from "next/head"
import { Header } from "@components/organisms/header"
import { logo } from "@public/static/image"
import Search from "@components/template/search"
import { Sidebar } from "@components/template/sidebar"

const Layout = ({ children }) => {
    const addClass = () => {
        document.body.classList.add("canvas-opened")
    }

    const removeClass = () => {
        document.body.classList.remove("canvas-opened")
    }

    const openSearch = () => {
        document.body.classList.toggle("open-search-form")
    }

    return (
        <>
            <Head>
                <meta property="og:title" content="Omerald" key="title" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <meta name="description" content="Find the best articles for better health and fitness." />

                <link rel="icon" href={logo} />
            </Head>
            <Header openSearch={openSearch} addClass={addClass} />

            <Search />
            <Sidebar removeClass={removeClass} />
            {children}
        </>
    )
}

export default Layout
