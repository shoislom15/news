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
        lilas = a;

        li.appendChild(a);
        category.appendChild(li);

    });
}

renderCategories();

const renderRow = (obj) => {
    console.log(obj);
    const h4 = document.createElement("h4");
    h4.innerHTML = obj.category[0].toUpperCase() + obj.category.substring(1);
    h4.className = "m-4";
    content.appendChild(h4);

    const row = document.createElement("div");
    row.className = "d-flex custom-row mb-3";
    content.appendChild(row);

    obj.data.map((data) => {

        const bigBox = document.createElement("div");
        bigBox.className = "big-box px-4";
        row.appendChild(bigBox);

        const box = document.createElement("div");
        box.className = "box p-0";
        bigBox.appendChild(box);

        const top = document.createElement("div");
        top.className = "top";
        box.appendChild(top);

        const img = document.createElement("img");
        img.className = "w-100"
        img.src = data.imageUrl;
        top.appendChild(img);

        const bottom = document.createElement("div");
        bottom.className = "bottom pt-2";
        box.appendChild(bottom);

        const titleP = document.createElement("p");
        titleP.innerHTML = data.title;
        bottom.appendChild(titleP);
    });



};



const renderPage = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";

    dataCategories.map((cat) => {
        console.log(cat.toLowerCase());
        get(`https://inshortsapi.vercel.app/news?category=${cat.toLowerCase()}`);
    });
};

renderPage();