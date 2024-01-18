import { reactive } from "vue";


export const store = reactive({
    navbar: [
        {
            link: "home"
        },
        {
            link: "fixtures & results"
        },
        {
            link: "league table"
        },
        {
            link: "players"
        },
        {
            link: "gallery"
        },
        {
            link: "blog"
        },
        {
            link: "contact"
        },
    ],
    players: [
        {
            name: "Adam Brown",
            image: "/player1.jpg",
            role: "Forwarder",
            number: "07"
        },
        {
            name: "Michael Kayn",
            image: "/player2.jpg",
            role: "Forwarder",
            number: "09"
        },
        {
            name: "Micheal Lee",
            image: "/player3.jpg",
            role: "Forwarder",
            number: "11"
        },
        {
            name: "Ethan Smith",
            image: "/player4.jpg",
            role: "Midfielder",
            number: 15
        }
    ],
    cards: [
        {
            date: "29.95.2022 - Football",
            title: "What is Football?",
            description: "Football is a sport that is known as a ball game and is loved by [...]",
            img: '../../news1-1-150x150.png',
            id: '1'
        },
        {
            date: "29.95.2022 - Football",
            title: "Football Rules",
            description: "GOLDEN GOAL: In a football match, the goal scored by one of the teams in […]",
            img: '../../news3-1-150x150.png',
            id: '2'
        },
        {
            date: "29.95.2022 - Football",
            title: "Football Features",
            description: "Football; It is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing […]",
            img: '../../news2-1-150x150.png',
            id: '3'
        },
        {
            date: "29.95.2022 - Football",
            title: "Football Terms",
            description: "GOLDEN GOAL: In a football match, the goal scored by one of the teams in […]",
            img: '../../news4-1-150x150.png',
            id: '4'
        },
        {
            date: "29.95.2022 - Football",
            title: "Football Terms",
            description: "GOLDEN GOAL: In a football match, the goal scored by one of the teams in […]",
            img: '../../news4-1-150x150.png',
            id: '5'
        }
    ],

    team: [
        {
            name: " Instambul Sports",
            img: "/league-club-1-png",
            w: "18",
            d: "2",
            l: "0",
            pts: "42"
        },
        {
            name: " United Fs Club",
            img: "/league-club-2-png",
            w: "14",
            d: "2",
            l: "1",
            pts: "35",
        },
        {
            name: "Schalke Club",
            img: "/league-club-3-png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        },
        {
            name: "Inter Club",
            img: "/league-club-4-png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        },
        {
            name: "Madrid Club",
            img: "/league-club-5-png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        },
        {
            name: "Schalke Club",
            img: "/league-club-6-png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        },
        {
            name: "Arsenal Club",
            img: "/league-club-7-png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        },
        {
            name: "Bayern Club",
            img: "/league-club-8-png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        },
        {
            name: "Atletico Club",
            img: "/leage-club-9.png",
            w: "13",
            d: "3",
            l: "0",
            pts: "32",
        }
    ],


})