import { RegisterButton, SearchButton } from "@components/atoms/buttons"
import { Logo } from "@components/atoms/logo"
import React from "react"

export const RightHeader = ({ openSearch }) => {
    return (
        <div className="col-md-9 col-xs-6 text-right header-top-right ">
            <SearchButton openSearch={openSearch} />
            <RegisterButton />
        </div>
    )
}

export const LeftHeader = () => {
    return (
        <div className="col-md-3 col-xs-6">
            <Logo />
        </div>
    )
}
