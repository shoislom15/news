const get = (callback) => {
    axios.
        get(`https://inshortsapi.vercel.app/news?category=all`)
        .then((response) => {
            console.log(response);
            callback(response);
        })
        .catch((err) => {
            console.log(err);
        })
}

