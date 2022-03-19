import { SearchIcon } from "@components/atoms/icons"
import { SearchInput } from "@components/atoms/input"
import React from "react"

export const SearchHeader = () => {
    return (
        <p className="text-center">
            <span className="search-text-bg">Search</span>
        </p>
    )
}

export const SearchForms = () => {
    return (
        <form action="#" className="search-header">
            <div className="input-group w-100">
                <SearchInput placeholder="Search articles, authors and topics" />
                <div className="input-group-append">
                    <button className="btn btn-search bg-white" type="submit">
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </form>
    )
}
