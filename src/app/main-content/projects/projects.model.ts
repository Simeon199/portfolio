export interface SingleProject {
    index: string;
    title: string;
    description: string;
    technologies: string;
    projectImageSource: string;
}

export interface technologyData {
    join: {
        technologyList: string[];
        technologyImageIcons: string[];
    },
    elPolloLoco: {
        technologyList: string[];
        technologyImageIcons: string[];
    },
    daBubble: {
        technologyList: string[];
        technologyImageIcons: string[];
    }
}