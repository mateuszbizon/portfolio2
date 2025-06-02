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
    }
]