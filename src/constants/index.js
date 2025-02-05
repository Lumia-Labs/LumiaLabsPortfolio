import adnanahmed from "../assets/members/adnan-ahmed.jpg";
import allenhwu from "../assets/members/allen-hwu.jpeg";
import kenwoon from "../assets/members/ken-woon.jpeg";
import kennyhe from "../assets/members/kenny-he.jpg";

export const navLinks = [
    {
        id: "#top",
        title: "TOP"
    },
    {
        id: "#about",
        title: "ABOUT"
    },
    {
        id: "#services",
        title: "SERVICES"
    },
    {
        id: "#projects",
        title: "PROJECTS"
    },
    {
        id: "#members",
        title: "MEMBERS"
    }
];

export const navLinksSmall = [
    {
        id: "#contact",
        title: "Contact"
    }
];

export const projects = [
    // TODO: Choose better projects to showcase
    {
        id: 1,
        name: "3D PORTFOLIO WEBSITE",
        features: "Showcases projects and skills with an engaging user interface",
        overview: "A personal portfolio website featuring 3D modelling and interactive design elements",
        tags: [
            "REACT.JS",
            "NODE.JS",
            "THREE.JS",
            "TAILWIND CSS",
            "BLENDER"
        ],
        image: "",
        color: "#c6975f",
        bg_color: "#faf1e4",
        source_code_link: "https://kenwoon.github.io/portfolio/",
        start_scroll_pos: 0.45,
        end_scroll_pos: 0.58
    },
    {
        id: 2,
        name: "DATA DASHBOARD",
        features: "Interactive charts and graphs for data analysis",
        overview: "A data visualization dashboard allowing users to view data across different date ranges and categories",
        tags: [
            "REACT.JS",
            "CHART.JS",
            "SEQUELIZE",
            "POSTGRESQL"
        ],
        image: "",
        color: "",
        bg_color: "",
        source_code_link: "https://github.com/KennyHc/Data-Dashboard",
        start_scroll_pos: 0.55,
        end_scroll_pos: 0.68
    },
    {
        id: 3,
        name: "WAREHOUSE MANAGEMENT TOOL",
        features: "Product management, stock updates, and a user-friendly dashboard",
        overview: "A full-stack application for managing warehouse products and stock levels",
        tags: [
            "TYPESCRIPT",
            "CSS",
            "JAVASCRIPT",
            "HTML"
        ],
        image: "",
        color: "",
        bg_color: "",
        source_code_link: "https://github.com/KennyHc/warehouse-management-1",
        start_scroll_pos: 0.65,
        end_scroll_pos: 0.78
    }
];

export const members = [
    // TODO: Get images for each member and edit bios
    {
        id: 1,
        name: "Adnan Makhdum Ahmed",
        title: "Co-Founder",
        image: adnanahmed,
        bio: "Adnan is a co-founder of LumiaLabs and leads the management and operations of the company. He has a background in civil engineering and project management.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/adnan-makhdum-a-19a6ba18a/",
            github: ""
        }
    },
    {
        id: 2,
        name: "Allen Hwu",
        title: "Co-Founder",
        image: allenhwu,
        bio: "Allen is a one of the co-founders of LumiaLabs and leads the management and operations of the company. He has a background in psychology and project management.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/allenhwu1/",
            github: ""
        }
    },
    {
        id: 3,
        name: "Fahid Shadman Karim",
        title: "Software Developer",
        image: "",
        bio: "Fahid is a software developer at LumiaLabs and specializes in full-stack development. He has a background in computer science and software engineering.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/fahid-s-karim/",
            github: "https://github.com/FahidShadmanKarim"
        }
    },
    {
        id: 4,
        name: "Ken Woon",
        title: "Software Developer",
        image: kenwoon,
        bio: "Ken is a software developer at LumiaLabs and specializes in full-stack development. He has a background in electrical engineering, mechatronics, and software engineering.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/xk-woon/",
            github: "https://github.com/kenwoon"
        }
    },
    {
        id: 5,
        name: "Kenny He",
        title: "Software Developer",
        image: kennyhe,
        bio: "Kenny is a software developer at LumiaLabs and specializes in full-stack development. He has a background in computer science and software engineering.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/kenny-he-chen/",
            github: "https://github.com/KennyHc"
        }
    }
];