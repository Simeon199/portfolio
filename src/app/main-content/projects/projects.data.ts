import { projectsModel } from "./projects.model";
export const projectsData: projectsModel = {
    join: {
        title: 'Join',
        projectImageSource: '../../../../assets/img/join_image.png',
        description: 'Bei dieser Anwendung handelt es sich um einen Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Tasks mit Hilfe der Drag-and-Drop-Funktionalität und weisen Benutzer und Kategorien zu.',
        technologyList: ['HTML', '|', 'CSS', '|', 'JavaScript'],
        technologyImageIcons: [
            '../../../../assets/img/html-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/javascript-technology.svg'
        ],
        projectIndex: 0,
        projectIndexAsString: '01',
        projectLink: 'https://join.simon-kiesner.de/login.html',
        gitHubLink: 'https://github.com/Simeon199/Join'
    },
    elPolloLoco: {
        title: 'El Pollo Loco',
        projectImageSource: '../../../../assets/img/pollo_loco.png',
        description: 'In diesem Jump-and-Run-Spiel, das mit objektorientierter Programmierung realisiert wurde, kämpft Pepe Peligroso gegen eine Gruppe verrückter Hühner. Seien Sie dabei und unterstützen Sie ihn bei diesem Abenteuer!',
        technologyList: ['HTML', '|', 'CSS', '|', 'JavaScript'],
        technologyImageIcons: [
            '../../../../assets/img/html-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/javascript-technology.svg'
        ],
        projectIndex: 1,
        projectIndexAsString: '02',
        projectLink: 'https://el-pollo-loco.simon-kiesner.de/index.html',
        gitHubLink: 'https://github.com/Simeon199/el_pollo_loco'
    },
    daBubble: {
        title: 'DABubble (Coming Soon)',
        projectImageSource: '../../../../assets/img/dabubble.png',
        description: 'In Anlehnung an Slack bietet diese App eine benutzerfreundliche Plattform zur Optimierung der Teamkommunikation. Durch Echtzeitnachrichten und eine strukturierte Kanalorganisation wird der Austausch im Team spürbar vereinfacht.',
        technologyList: ['Angular', '|', 'TypeScript', '|', 'Firebase', '|', 'SCSS', '|', 'HTML'],
        technologyImageIcons: [
            '../../../../assets/img/angular-technology.svg',
            '|',
            '../../../../assets/img/typescript-technology.svg',
            '|',
            '../../../../assets/img/firebase-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/html-technology.svg'
        ],
        projectIndex: 2,
        projectIndexAsString: '03',
        projectLink: 'Not found',
        gitHubLink: 'Not found'
    }
}
