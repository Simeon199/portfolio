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
    },
    elPolloLoco: {
        title: string,
        technologyList: string[];
        technologyImageIcons: string[];
    },
    daBubble: {
        title: string,
        technologyList: string[];
        technologyImageIcons: string[];
    }
}