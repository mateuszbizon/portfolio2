export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
    technologies: Technology[];
    isLive: boolean;
}

export type Technology = {
    id: number;
    name: string;
    icon: string;
}

export type Skill = {
    id: number
    name: string
    level: string
}