import React from "react"
import Link from "next/link"
import { Links } from "@components/atoms/links"
import { HeaderText, PlainText } from "@components/atoms/typography"

export const Card = ({ title, description, image }) => {
    console.log(image)
    return (
        <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                <Links route="/" value={<img src={image.toString()} alt="article"></img>}></Links>
            </div>
            <div className="post-content media-body">
                <HeaderText text={<Links route="/" value={title} />} />
                <PlainText text={description} />
            </div>
        </div>
    )
}

Card.defaultProps = {
    image: "https://res.cloudinary.com/raghu369/image/upload/v1647692457/Omerald/assets/Medical-Journals_cy5mp0.png",
}
