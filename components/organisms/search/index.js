import React from "react"
import { SearchHeader, SearchForms } from "@components/molecules/search"
import { HeaderText } from "@components/atoms/typography"
import { keywords, articlesList } from "@public/static/data"
import { CardList, NavList } from "@components/molecules/listmap"

export const SearchForm = () => {
    return (
        <div className="row mb-20">
            <div className="col-12 align-self-center main-search-form-cover m-auto">
                <SearchHeader />
                <SearchForms />
            </div>
        </div>
    )
}

export const SuggestedKeyword = () => {
    return (
        <div className="row mt-80 text-center">
            <div className="col-12 font-small suggested-area">
                <HeaderText text="Suggested keywords" />
                <NavList list={keywords} />
            </div>
        </div>
    )
}

export const SearchedItems = () => {
    return (
        <div className="row mt-80">
            <CardList list={articlesList} />
        </div>
    )
}
