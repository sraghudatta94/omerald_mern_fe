import { LeftHeader, RightHeader } from "@components/molecules/header"
import React from "react"
import Menu from "@components/organisms/menu"

export const Header = ({ openSearch,addClass }) => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row pt-20 pb-20">
                        <LeftHeader />
                        <RightHeader openSearch={openSearch} />
                    </div>
                </div>
            </div>
            <Menu addClass={addClass} />
        </header>
    )
}
