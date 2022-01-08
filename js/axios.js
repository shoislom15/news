const get = (url = `https://inshortsapi.vercel.app/news?category=all`) => {
    axios.
        get(url)
        .then((response) => {
            // console.log(response);
            renderRow(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
}