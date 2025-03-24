const form = document.querySelector("form");
const result = document.getElementById("result");

function searchMovies(searchText) {
    const url = ` https://api.tvmaze.com/search/shows?q=${searchText}`;

    //to remove results from earlier searches
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    axios
        .get(url)
        .then((res) => {
            for (let item of res.data) {
                if (item.show.image) {
                    const img = document.createElement("img");
                    img.src = item.show.image.medium;
                    img.style.border = "2px solid black";
                    img.style.padding = "4px";
                    img.style.margin = "10px";
                    img.style.borderRadius = "4px";
                    img.style.backgroundColor = "white";
                    img.style.boxShadow = "4px 8px 12px #000000";
                    result.append(img);
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Event.preventDefault()
    // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    // The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.

    // As noted below, calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying cancelable: true has no effect.
    const searchText = form.elements[0].value;
    // console.log(searchText);
    searchMovies(searchText);
    form.elements[0].value = "";
});
