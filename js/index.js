const renderCategories = () => {
    const category = document.querySelector("#category");
    let lilas;

    category.innerHTML = "";
    dataCategories.map(e => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "a-border"
        a.href = "#";
        a.innerHTML = e;

        li.appendChild(a);
        category.appendChild(li);

        lilas = li;
    });

    lilas.classlist.remove("a-border")
    lilas.classlist.add("px-4");
}

renderCategories();