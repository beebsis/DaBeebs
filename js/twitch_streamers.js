const streamers =
[
    {
        name: "sir_crunch_a_lot",
        link: "https://twitch.tv/sir_crunch_a_lot",
        info: "I play games, say whats up if you do to...",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Cozy", "Soft", "Relaxing"],
        picture: "sir_crunch_a_lot.jpg"
    },
    {
        name: "renaynee ",
        link: "https://twitch.tv/renaynee",
        info: "Just a lonely immortal who is looking to reconnect with humans again.",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Cozy", "Chaotic", "Cheaky"],
        picture: "renaynee.png"
    },
    {
        name: "yuzulmn",
        link: "https://twitch.tv/yuzulmn",
        info: "I am Yuzu, your favorite loot goblin!! We play games, do art and chat a lot!",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Goblin", "Chaotic", "LOOT"],
        picture: "yuzulmn.png"
    },
    {
        name: "mahochiii",
        link: "https://www.twitch.tv/mahochiii",
        info: "I'm just a small goldfish having fun on twitch.",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Cozy", "Chaotic", "Confused"],
        picture: "mahochiii.png"
    },
    {
        name: "huntress_venus",
        link: "https://twitch.tv/huntress_venus",
        info: "Anime artist, tomboi and not girly! I'm bad at video games.",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Cozy", "Chaotic", "Gremlin"],
        picture: "huntress_venus.png"
    },
    {
        link: "https://twitch.tv/newtypebtw",
        info: "Gamer",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Chaotic", "Vermins", "Chaos"],
        picture: "NewType.jpg"
    },
    {
        name: "notmes",
        link: "https://twitch.tv/notmes",
        info: "Full time streamer since 2014, US WoW Regionals Champion 2017, Blizzcon WoW Champion 2018.",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Chaotic", "WoW", "Professional"],
        picture: "notmes.jpg"
    },
    {
        name: "xxspexiexx",
        link: "https://twitch.tv/xxspexiexx",
        info: "I'm a artist/gamer who likes streaming what I do! I enjoy food and company, very into the color black. Keeper of horny jail",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Chaotic", "Laughter", "Cozy"],
        picture: "xxspexiexx.png"
    },
    {
        name: "KyeraMoon",
        link: "https://twitch.tv/KyeraMoon",
        info: "hellu I'm Kyera a new png tuber. I really like video games (duhh)",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Cozy", "Chaotic", "Retro"],
        picture: "KyeraMoon.jpg"
    },
    {
        name: "theonemanny",
        link: "https://twitch.tv/theonemanny",
        info: "loud dog man vtuber thing since 2016",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Chaos", "Chaotic", "WTF"],
        picture: "theonemanny.png"
    },
    {
        name: "sleepypurin",
        link: "https://twitch.tv/sleepypurin",
        info: "hi i’m purin, cat vtuber & bringer of comfy vibes! 🍮",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Chaotic", "Cozy", "Illogical"],
        picture: "sleepypurin.jpg"
    },
]

/*
    {
        name: "",
        link: "https://twitch.tv/NAME",
        info: "",
        pegi: {
<<<<<<< Updated upstream
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["TAG", "TAG", "TAG"],
        picture: ""
    },
 */

function createStreamer() {
    const streamerList = document.getElementsByClassName("streamer-cards");
    console.log(streamerList);

    for (let i = 0; i < streamers.length; i++)
    {
        // Div Containers
        const streamer_div = document.createElement("div");
        const streamer_pic_div = document.createElement("div");
        const streamer_info_div = document.createElement("div");
        const streamer_restriction_div = document.createElement("div");

        const streamer_pic = document.createElement("img");
        const streamer_info_name = document.createElement("h3");
        const streamer_info_desc = document.createElement("p");
        const streamer_tags = document.createElement("p");

        const streamer_pegi = document.createElement("p");
        const streamer_pegi_span = document.createElement("span");
        const streamer_icon = document.createElement("i");

        const streamer_link = document.createElement("p");
        const streamer_link_a = document.createElement("a");

        //Prints item name of index into summary
        streamer_pic.src = "./assets/" + streamers[i].picture;
        streamer_pegi_span.innerHTML = streamers[i].pegi.age;
        streamer_info_name.innerHTML = streamers[i].name;
        streamer_info_desc.innerHTML = streamers[i].info;
        streamer_tags.innerHTML = streamers[i].tags.join(', ');
        streamer_link.innerHTML = "View";



        // Handing Classes and other attributes
        streamer_div.classList.add("streamer");
        streamer_pic_div.classList.add("streamer-pic");
        streamer_restriction_div.classList.add("restriction");
        streamer_icon.classList = streamers[i].pegi.icon;
        streamer_info_div.classList.add("streamer-info");
        streamer_info_desc.classList.add("streamer-info-desc");
        streamer_tags.classList.add("streamer_tags");
        streamer_link_a.classList = "streamer_link_btn";
        streamer_link_a.href = streamers[i].link;
        

        // Appending Components
        streamerList[0].appendChild(streamer_div);
        streamer_div.appendChild(streamer_pic_div);
        streamer_div.appendChild(streamer_info_div);
        streamer_div.appendChild(streamer_restriction_div);
        
        // Append to sub divs
        streamer_pic_div.appendChild(streamer_pic);
        streamer_info_div.appendChild(streamer_info_name);
        streamer_info_div.appendChild(streamer_tags);
        streamer_info_div.appendChild(streamer_info_desc);
        streamer_restriction_div.appendChild(streamer_pegi);
        streamer_pegi.appendChild(streamer_pegi_span);
        streamer_restriction_div.appendChild(streamer_icon);
        streamer_div.appendChild(streamer_link_a);
        streamer_link_a.appendChild(streamer_link);
    }

}

createStreamer();
console.log(streamers);