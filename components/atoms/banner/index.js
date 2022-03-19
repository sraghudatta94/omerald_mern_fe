import React from "react"
import { Links } from "../links"

export const BannerText = () => {
    return (
        <p className="">
            The link you clicked may be broken or the page may have been removed.
            <br /> visit the <Links value="Homepage" route="/" />
            &ensp; or&ensp;
            <Links value="Contact" route="/contact" />
            &ensp;about the problem
        </p>
    )
}
