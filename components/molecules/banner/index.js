import { Subscribe } from "@components/atoms/subscribe"
import { HomeBannerText } from "@components/atoms/typography"
import { homeBanner } from "@public/static/image"
import Image from "next/image"

import React from "react"

export const HomeBannerContent = () => {
    return (
        <div className="row">
            <div className="col-lg-6 align-self-center">
                <HomeBannerText />
                <Subscribe />
            </div>
            <div className="col-lg-6 text-right d-none d-lg-block">
                <Image src={homeBanner} alt="" width="400" height="350" />
            </div>
        </div>
    )
}
