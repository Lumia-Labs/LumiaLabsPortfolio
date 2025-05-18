import {
    adnanahmed, allenhwu, fahidkarim, kenwoon, kennyhe,
    ai, software, web, mobile_app, cloud, ui_ux, real_estate, api, business
} from "../assets";

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

export const services = [
    {
        id: 1,
        name: "AI & Machine Learning",
        description: "From defining business challenges to crafting AI-driven strategies, we support clients in leveraging AI for recruitment automation, CV optimization, and prompt engineering. Our services cover the entire process, from data collection and analysis to implementation and continuous improvement.",
        image: ai
    },
    {
        id: 2,
        name: "Custom Software Development",
        description: "We design and develop tailored software solutions to meet unique business needs. Whether building enterprise applications, automation tools, or specialized systems, our team ensures scalable, high-performance, and future-proof solutions.",
        image: software
    },
    {
        id: 3,
        name: "Web Development",
        description: "We create dynamic, responsive, and user-friendly websites that enhance brand presence and user engagement. From corporate websites to e-commerce platforms, our expertise ensures seamless functionality and aesthetic appeal.",
        image: web
    },
    {
        id: 4,
        name: "Mobile App Development",
        description: "Our mobile development team crafts intuitive and high-performing applications for iOS and Android. We focus on user experience, scalability, and security to deliver apps that meet modern business demands.",
        image: mobile_app
    },
    {
        id: 5,
        name: "Cloud and Backend Engineering",
        description: "Leveraging cloud technologies, we build robust and scalable backend systems that support business operations. Our expertise includes cloud infrastructure, serverless architectures, and data management solutions.",
        image: cloud
    },
    {
        id: 6,
        name: "UI/UX Design & Product Development",
        description: "Our design team brings ideas to life with innovative UI/UX solutions. From concept to final product, we create intuitive, user-centric designs that enhance engagement and streamline user interactions.",
        image: ui_ux
    },
    {
        id: 7,
        name: "Real Estate & Proptech Solutions",
        description: "We develop cutting-edge solutions for the real estate industry, integrating technology into property management, smart buildings, and digital transactions to optimize operations and enhance user experiences.",
        image: real_estate
    },
    {
        id: 8, 
        name: "API Development & System Integrations",
        description: "Seamless connectivity is key to modern digital ecosystems. We design and integrate APIs that connect applications, enable automation, and ensure smooth data exchange across platforms.",
        image: api
    },
    {
        id: 9,
        name: "Business & Technical Consulting",
        description: "We provide expert consulting to bridge business needs with technical solutions. Our team analyzes challenges, recommends strategies, and implements digital transformation initiatives that drive growth and efficiency.",
        image: business
    }
]

export const projects = [
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
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        color: "#00bcd4",
        bg_color: "#e0f7fa",
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
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        color: "#4caf50",
        bg_color: "#e8f5e9",
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
        title: "Business & Growth Lead",
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
        title: "Operations & Project Lead",
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
        title: "Technical Lead",
        image: fahidkarim,
        bio: "Fahid is a software developer at LumiaLabs and specializes in full-stack development. He has a background in computer science and software engineering.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/fahid-s-karim/",
            github: "https://github.com/FahidShadmanKarim"
        }
    },
    {
        id: 4,
        name: "Ken Woon",
        title: "Full-Stack & System Architecture Lead",
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
        title: "Full-Stack & Software Engineering Lead",
        image: kennyhe,
        bio: "Kenny is a software developer at LumiaLabs and specializes in full-stack development. He has a background in computer science and software engineering.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/kenny-he-chen/",
            github: "https://github.com/KennyHc"
        }
    }
];