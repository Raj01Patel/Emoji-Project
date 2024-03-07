const parent = document.getElementById("search_result_container");
const search_field = document.getElementById("search_field")

const autoSearch = e => {
    const value = e.target.value;
    console.log(value);
    displaySearchResults(value);
}

const displaySearchResults = (searchQuery = "") => {
    const filtered = emojiList.filter(e => {
        if (e.description.indexOf(searchQuery) != -1) {
            return true;
        }
        if (e.aliases.find(elem => elem === searchQuery)) {
            return true;
        }
        if (e.tags.find(elem => elem === searchQuery)) {
            return true;
        }
    });
    // const parent = document.getElementById("search_result_container");
    parent.innerHTML = "";
    filtered.forEach(e => {
        const new_row = document.createElement('tr');
        const new_emoji = document.createElement('td');
        const new_aliases = document.createElement('td');
        const new_desc = document.createElement('td');

        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases.join(", ");
        new_desc.innerText = e.description;

        new_aliases.innerText = new_aliases.innerText.replaceAll('_', " ");


        new_emoji.classList.add("emoji");
        new_aliases.classList.add("aliases");
        new_desc.classList.add("desc");

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);
        parent.appendChild(new_row);
    })
}

search_field.addEventListener("keyup", autoSearch)
window.onload = () => displaySearchResults();