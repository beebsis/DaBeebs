const streamers =
[
    {
        name: "xHyraldia",
        link: "https://twitch.tv/xhyraldia",
        info: "Aloha! ♥ It´s me, your friendly neighbourhood space dragon! ♥",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Cozy", "Chaotic", "Relaxing"],
        picture: "xhyraldia.png"
    },
    {
        name: "meiiwukou",
        link: "https://twitch.tv/meiiwukou",
        info: "A friend you keep safe in your memories. Let's do our best today too.",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Cozy", "Soft", "Relaxing"],
        picture: "meiiwukou.jpg"
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
        name: "zellisart",
        link: "https://twitch.tv/zellisart",
        info: "I stream art/drawing and various video games. I'm picky and I mostly play FPS, don't like PvP. I'm a CASUAL gamer.",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Chaotic", "Tomboi", "Cozy"],
        picture: "zellisart.png"
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
        info: "hellu I'm Kyera a new png tuber. I'm a solid 18 years old and I really like video games (duhh)",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Cozy", "Chaotic", "Retro"],
        picture: "KyeraMoon.jpg"
    },
    {
        name: "hoshiiko__",
        link: "https://twitch.tv/hoshiiko__",
        info: "en/việt vtuber~! I'm an ex-princess here to vibe with the cuties~",
        pegi: {
            age: "mature",
            icon: "fa-solid fa-person"
        },
        tags: ["Crazy", "Chaotic", "WTF"],
        picture: "hoshiko__.png"
    },
    {
        name: "Beebsis",
        link: "https://twitch.tv/beebsis",
        info: "Your oversease study & work partner - and game buddy.",
        pegi: {
            age: "everyone",
            icon: "fa-solid fa-people-group"
        },
        tags: ["Cozy", "Atmospheric", "Relaxing"],
        picture: "beebsis.png"
    },
]

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
        streamer_tags.classList.add("streamer_tags");
        streamer_link.classList = "streamer_link_btn";
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