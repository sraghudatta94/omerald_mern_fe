import React from "react"

import { SearchForm, SearchedItems, SuggestedKeyword } from "@components/organisms/search"

const Search = () => {
    return (
        <>
            <div className="main-search-form">
                <div className="container">
                    <div className="pt-50 pb-50 ">
                        <SearchForm />
                        <SuggestedKeyword />
                        <SearchedItems />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
