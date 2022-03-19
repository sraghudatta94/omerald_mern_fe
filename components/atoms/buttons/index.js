import React from "react"
import Link from "next/link"

export const SearchButton = ({ openSearch }) => {
    return (
        <button className="search-icon d-none d-md-inline" onClick={openSearch}>
            <span className="mr-15 text-muted font-small">
                <i className="elegant-icon icon_search mr-5"></i>
                Search
            </span>
        </button>
    )
}

export const RegisterButton = () => {
    return (
        <Link href="/register">
            <a>
                <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">Register Now</button>
            </a>
        </Link>
    )
}

export const HomeButton = () => {
    return (
        <button type="submit" className="button button-contactForm mt-30">
            <Link href="/">
                <a className="text-white">Home page</a>
            </Link>
        </button>
    )
}
