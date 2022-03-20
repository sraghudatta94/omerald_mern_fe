import { FaceBook, Instagram, Pinterest } from "@components/atoms/socialIcons"
import React from "react"

export const SocialNav = () => {
    return (
        <ul className="header-social-network d-inline-block list-inline mr-15">
            <FaceBook />
            <Instagram />
            <Pinterest />
        </ul>
    )
}
