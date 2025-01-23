export interface Projects {
    join: string;
    elPolloLoco: string;
    daBubble: string;
}

export interface ProjectImageSources {
    joinImageSrc: string;
    elPolloLocoImageSrc: string;
    daBubbleImageSrc: string;
}

export interface ProjectDescription {
    join: {
        title: string;
        description: string;
        technologies: any;
        projectImageSource: string;
    };
    elPolloLoco: {
        title: string;
        description: string;
        technologies: any;
        projectImageSource: string;
    };
    daBubble: {
        title: string;
        description: string;
        technologies: any;
        projectImageSource: string;
    };
}

