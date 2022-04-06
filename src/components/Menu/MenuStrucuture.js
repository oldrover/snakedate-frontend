import { faCalendar, faBell, faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";

export const menuItems = [
    {
        name:'Dashboard', 
        icon: faHome,
        link: '/'
    },
    {
        name:'Kalender', 
        icon: faCalendar,
        link: '/calendar'
    },
    {
        name:'Alarme', 
        icon: faBell,
        link: '/alarms'
    },
    {
        name:'Statistiken', 
        icon: faChartLine,
        link: '/statistics'
    }
];