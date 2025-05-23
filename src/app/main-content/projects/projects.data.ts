import { projectsModel } from "./projects.model";
export const projectsData: projectsModel = {
    join: {
        title: 'Join',
        projectImageSource: '../../../../assets/img/join.png',
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
        projectLink: 'https://join.simon-kiesner.de/pages/login.html',
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
    }
}
