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
        projectImageSource: string,
        description: string,
        technologyList: string[];
        technologyImageIcons: string[];
        projectIndex: number;
        projectIndexAsString: string;
    },
    elPolloLoco: {
        title: string,
        projectImageSource: string,
        description: string,
        technologyList: string[];
        technologyImageIcons: string[];
        projectIndex: number;
        projectIndexAsString: string;
    },
    daBubble: {
        title: string,
        projectImageSource: string,
        description: string,
        technologyList: string[];
        technologyImageIcons: string[];
        projectIndex: number;
        projectIndexAsString: string;
    }
}