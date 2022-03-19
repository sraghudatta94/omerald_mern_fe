import { BannerText } from "@components/atoms/banner"
import { HomeButton } from "@components/atoms/buttons"
import { SearchInput } from "@components/atoms/input"
import { NotFoundImage } from "@components/atoms/pageNotFound"

import React from "react"

export const BannerLeft = () => {
    return (
        <div className="col-lg-6 col-md-12 d-lg-block d-none pr-50">
            <NotFoundImage />
        </div>
    )
}

export const BannerRight = () => {
    return (
        <div className="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
            <h1 className="mb-30 font-weight-900 page-404">404</h1>
            <SearchInput />
            <BannerText />
            <HomeButton />
        </div>
    )
}
