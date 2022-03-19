import { LeftHeader, RightHeader } from "@components/molecules/header"
import React from "react"

export const Header = ({ openSearch }) => {
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
        </header>
    )
}
