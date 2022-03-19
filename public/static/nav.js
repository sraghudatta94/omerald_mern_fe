import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const navMenu = [
    {
        id: 1,
        displayText: "Home",
        route: "/",
    },
    {
        id: 2,
        displayText: "Topics",
        route: "/topics",
    },
    {
        id: 3,
        displayText: "Articles",
        route: "/articles",
    },
    {
        id: 4,
        displayText: "About",
        route: "/about",
    },
    {
        id: 5,
        displayText: "Contact Us",
        route: "/contact",
    },
]

export const iconList = [
    {
        id: 1,
        icon: faFacebook,
        route: "/",
        style: "text-blue-700 bg-white border-2 rounded-full",
    },
    {
        id: 2,
        icon: faInstagram,
        route: "/",
        style: "text-red-700 bg-white border-2 rounded-full",
    },
    {
        id: 3,
        icon: faTwitter,
        route: "/",
        style: "text-blue-700 bg-white border-2 rounded-full",
    },
]
