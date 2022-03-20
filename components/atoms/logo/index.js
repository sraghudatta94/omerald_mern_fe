import React from "react"
import { logo } from "@public/static/image"
import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return (
        <Link href="/">
            <a>
                <Image className="logo" width="120" height="50" src={logo} alt="logo" />
            </a>
        </Link>
    )
}
