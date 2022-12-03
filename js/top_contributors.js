//const tags = ["Donation", "Bits", "gifted-subs", "helper", "clips", "art", "edits", "activity", "events", "certified-Belpas", "hypesquad", "beebs-Punisher"];
const contributors = [
    { name:"ManaBunXD", tag:"Mental support", class: "mental"},
    { name:"Lily", tag:"Communtiy Goblin", class:"activity"},
    { name:"DrunkenJudge", tag:"Mmmrrglllm ", class:"certified-Belpas"},
    { name:"Angel", tag:"'Murcan friendo", class:"beebs-punisher "}
]

function createContributor() {
    const contributorsList = document.getElementsByClassName("contributor-container");
    console.log(contributorsList);

    for (let i = 0; i < contributors.length; i++)
    {

        const contributor_box = document.createElement("div")
        const name_span_div = document.createElement("div");
        const contributor_tag_div = document.createElement("div");
        const name_span = document.createElement("span");
        const contributor_tag = document.createElement("span");

        name_span.innerHTML = contributors[i].name;
        contributor_tag.innerHTML = contributors[i].tag;

        contributor_box.classList.add("contributor-box");
        contributor_tag_div.classList.add(contributors[i].class);

        contributorsList[0].appendChild(contributor_box);
        contributor_box.appendChild(name_span_div);
        contributor_box.appendChild(contributor_tag_div);
        name_span_div.appendChild(name_span);
        contributor_tag_div.appendChild(contributor_tag);

        console.log(name_span);
    }
}

createContributor();