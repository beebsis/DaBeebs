const contributors = [
    {name:"David", tag:"donation"},
    {name:"Robert", tag:"helper"},
    {name:"Adam", tag:"clips"},
    {name:"Sydney", tag:"edits"},
    {name:"Chelsea", tag:"art"},
    {name:"Deborah", tag:""},
    {name:"Donald"},
    {name:"Daniel"},
    {name:"Cody"},
    {name:"Kyle"},
    {name:"Joanna"},
    {name:"Emma"},
    {name:"Matthew"},
    {name:"Nicholas"},
    {name:"Lindsay"},
    {name:"Matthew"},
    {name:"Justin"},
    {name:"Paul"},
    {name:"Grace"},
    {name:"Travis"},
    {name:"Shannon"},
    {name:"Daniel"},
    {name:"Marcus"},
    {name:"Ronald"},
    {name:"Tony"},
    {name:"Carlos"},
    {name:"Bryan"},
    {name:"George"},
    {name:"Mary"},
    {name:"Jacqueline"},
    {name:"Darin"},
    {name:"Lisa"},
    {name:"Chad"},
    {name:"Glenn"},
    {name:"Tracie"},
    {name:"Michael"},
    {name:"Matthew"},
    {name:"Kristine"},
    {name:"Hailey"},
    {name:"Dawn"},
    {name:"Laura"},
    {name:"William"},
    {name:"Jessica"},
    {name:"Rodney"},
    {name:"Matthew"},
    {name:"Shannon"},
    {name:"Stephanie"},
    {name:"Francis"},
    {name:"Elizabeth"},
    {name:"Jessica"},
]

const tags = ["Donation", "Bits", "gifted-subs", "helper", "clips", "art", "edits", "activity", "events", "certified-Belpas", "hypesquad", "beebs-Punisher"];

function createContributor() {
    const contributorsList = document.getElementsByClassName("contributor-container");
    console.log(contributorsList);

    for (let i = 0; i < contributors.length; i++)
    {   

        random_tag = Math.floor(Math.random() * tags.length);

        const contributor_box = document.createElement("div")
        const name_span_div = document.createElement("div");
        const contributor_tag_div = document.createElement("div");
        const name_span = document.createElement("span");
        const contributor_tag = document.createElement("span");

        name_span.innerHTML = contributors[i].name;
        contributor_tag.innerHTML = tags[random_tag];

        contributor_box.classList.add("contributor-box");
        contributor_tag_div.classList.add(tags[random_tag]);

        contributorsList[0].appendChild(contributor_box);
        contributor_box.appendChild(name_span_div);
        contributor_box.appendChild(contributor_tag_div);
        name_span_div.appendChild(name_span);
        contributor_tag_div.appendChild(contributor_tag);

        console.log(name_span);
    }
}

createContributor();