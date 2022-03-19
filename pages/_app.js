import React from "react"
import { useEffect } from "react"
import "../styles/globals.css"
React.useLayoutEffect = React.useEffect

import "react-perfect-scrollbar/dist/css/styles.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../public/assets/css/style.css"
import "../public/assets/css/widgets.css"
import "../public/assets/css/responsive.css"
import "metismenujs/dist/metismenujs.css"

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.WOW = require("wowjs")
        }

        new WOW.WOW().init()

        const hasGridClass = document.querySelector(".grid-sizer")

        if (hasGridClass != null) {
            const xyz = require("masonry-layout")
            var msnry = new xyz(".grid", {
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
            })
        }

        return () => {
            router.events.off("routeChangeError", handleRouteChangeError)
        }
    }, [])
    return <Component {...pageProps} />
}

export default MyApp
