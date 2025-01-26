export interface SingleProject {
    index: string;
    title: string;
    description: string;
    technologies: string;
    projectImageSource: string;
}

export interface technologyData {
    join: {
        title: string,
        technologyList: string[];
        technologyImageIcons: string[];
        projectIndex: number;
    },
    elPolloLoco: {
        title: string,
        technologyList: string[];
        technologyImageIcons: string[];
        projectIndex: number;
    },
    daBubble: {
        title: string,
        technologyList: string[];
        technologyImageIcons: string[];
        projectIndex: number;
    }
}