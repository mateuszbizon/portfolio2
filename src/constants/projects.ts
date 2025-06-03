import { Project } from "@/types";
import { TECHNOLOGIES } from "./technologies";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Matgram - Social Media App",
        description: "Web application for social media inspiring by Instagram with own idea",
        image: "/social_media_app.png",
        imageAlt: "Social media web application",
        link: "https://social-media-three-zeta.vercel.app/",
        technologies: [
            TECHNOLOGIES[0],
            TECHNOLOGIES[2],
            TECHNOLOGIES[5],
            TECHNOLOGIES[7],
            TECHNOLOGIES[8],
            TECHNOLOGIES[6],
        ],
        isLive: true
    },
    {
        id: 2,
        title: "VisitedCities App",
        description: "Web application for managing and visualizing visited cities on a map",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFP4DrkZvH2yKBJpGXjdn9VOvYJMDMOL1Uw&s",
        imageAlt: "Visited cities web application",
        link: "https://github.com/mateuszbizon/visitedCities",
        technologies: [
            TECHNOLOGIES[4],
            TECHNOLOGIES[3],
            TECHNOLOGIES[1],
        ],
        isLive: false
    },
    {
        id: 3,
        title: "Kanban Board App",
        description: "Web application for task management using the Kanban methodology",
        image: "/kanban_app.png",
        imageAlt: "Kanban board web application",
        link: "https://github.com/mateuszbizon/kanban_board",
        technologies: [
            TECHNOLOGIES[1],
            TECHNOLOGIES[2],
            TECHNOLOGIES[5],
            TECHNOLOGIES[7],
            TECHNOLOGIES[8],
        ],
        isLive: false
    },
    {
        id: 4,
        title: "DevLinks App",
        description: "Web application for sharing and managing developer links",
        image: "/devlinks_app.png",
        imageAlt: "Developer links web application",
        link: "https://github.com/mateuszbizon/devLinks",
        technologies: [
            TECHNOLOGIES[0],
            TECHNOLOGIES[2],
            TECHNOLOGIES[5],
            TECHNOLOGIES[7],
            TECHNOLOGIES[8],
        ],
        isLive: false
    },
]