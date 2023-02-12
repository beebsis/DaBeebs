const roles =
[
    {
        role_name: "Da Beeb",
        role_info: "Personal role for Beebsis.",
        role_fa_icon: "fa-solid fa-hands-holding-child" 
    },   
    {
        role_name: "Administrator",
        role_info: "A role for the administrators in the Discord server as well as Twitch moderators.",
        role_fa_icon: "fa-solid fa-shield" 
    },
    {
        role_name: "Moderator",
        role_info: "Discord moderator role - doesn't mean they're a Twitch staff.",
        role_fa_icon: "fa-solid fa-shield-halved" 
    },
    {
        role_name: "Bots",
        role_info: "We're using different bots on the server, you can find them through this role.",
        role_fa_icon: "fa-sharp fa-solid fa-gear" 
    },
    {
        role_name: "Friends",
        role_info: "This role gives you access to the self-promo channel at level 3, this may change over time.",
        role_fa_icon: "fa-solid fa-bullhorn" 
    },
    {
        role_name: "Beebs",
        role_info: "Default role after you've accepted the rules and guidelines of the community.",
        role_fa_icon: "fa-solid fa-user" 
    },
    {
        role_name: "WoW",
        role_info: "A fun role picked up by those whom play World of Warcraft.",
        role_fa_icon: "fa-solid fa-dice-d20" 
    },
    {
        role_name: "Community Games",
        role_info: "If you wish to get pinged with a Community Game event notificaiton.",
        role_fa_icon: "fa-solid fa-hat-wizard" 
    },
    {
        role_name: "Beepes",
        role_info: "This role is given automatically to Twitch Subscriber, those whgo support the stream financially through a monthly sub.",
        role_fa_icon: "fa-solid fa-otter" 
    },
    {
        role_name: "Boosties",
        role_info: "This role is given automatically to Discord server boosters",
        role_fa_icon: "fa-solid fa-otter" 
    },
]

/*
    {
        role_name: "",
        role_info: "",
        role_fa_icon: "" 
    },
*/

function createRoleCard() {
    const roleList = document.getElementsByClassName("discord-roles");
    console.log(roleList);

    for (let i = 0; i < roles.length; i++) {

        const card_role_div = document.createElement("div");
        const card_role_name = document.createElement("h3");
        const card_role_info = document.createElement("p");
        const card_role_icon = document.createElement("i");

        //Prints item name of index into summary
        card_role_name.innerHTML = roles[i].role_name;
        card_role_info.innerHTML = roles[i].role_info;

        card_role_div.classList.add("card-role");
        card_role_icon.className = roles[i].role_fa_icon;
        
        roleList[0].appendChild(card_role_div);
        card_role_div.appendChild(card_role_name);
        card_role_div.appendChild(card_role_info);
        card_role_div.appendChild(card_role_icon);
    }

}

createRoleCard();
console.log(roles);


/* !roles
 - Boobsis
 - Staff
 - Administrator
 - Moderator

 - Bots
 - Subscriber
 - Self-promo
 - Beebs
 - WoW
 - 
 */