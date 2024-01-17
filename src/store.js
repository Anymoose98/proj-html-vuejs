import { reactive } from "vue";
export const store = reactive ({
   navbar:[
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
   players:[
    {
        name:"Adam Brown",
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
   ]
})