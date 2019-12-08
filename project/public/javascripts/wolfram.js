console.log('Client side javascript is loaded.');

const mathpixForm = document.querySelector('#mathpix-form');
const mathpixSearch = document.querySelector('#mathpix-search');
const mathpixInput = document.querySelector('#mathpix-input');
// const wolframForm = document.querySelector('#wolfram-form');
// const wolframSearch = document.querySelector('#wolfram-search');
const wolframInput = document.querySelector('#wolfram-input');

mathpixForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // remove existing elements
    mathpixInput.innerHTML = '';
    wolframInput.innerHTML = '';

    // initialize useful information
    window.URL = window.URL || window.webkitURL;
    const photo = mathpixSearch.files[0];
    const formData = new FormData();
    formData.append("photo", photo);

    // call backend route to receive mathpix
    fetch('/upload/image', {method: "POST", body: formData}).then((response) => {
        response.json().then((data) => {
            console.log('MATHPIX CALL', data);

            // display picture on frontend
            const img = document.createElement("img");
            img.src = window.URL.createObjectURL(photo);
            img.width = 200;
            img.height = 200;
            img.onload = () => {window.URL.revokeObjectURL(this.src)};
            mathpixInput.appendChild(img);

            // send mathpix to wolfram
            wolframInput.innerHTML = "<p>Calculating...</p>";
            fetch(`/wolfram?string=${encodeURIComponent(data.wolfram)}`).then((response) => {
                response.json().then((results) => {
                    console.log('WOLFRAM API', results);

                    // display wolfram on frontend
                    wolframInput.innerHTML = "";
                    results.queryresult.pods.forEach((pod) => {
                        wolframInput.innerHTML += pod.markup.data;
                    });
                }).catch((error) => {
                    wolframInput.innerHTML = "<p>Error. Please try again.</p>";
                    console.log(error);
                })
            });
        })
    });
});

// wolframForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     wolframInput.innerHTML = "<p>Calculating...</p>";
//     fetch(`/wolfram?string=${encodeURIComponent(wolframSearch.value)}`).then((response) => {
//         console.log('wolframSearch.value', wolframSearch.value);
//         console.log('encodeURI(wolframSearch.value)', encodeURI(wolframSearch.value));
//         response.json().then((data) => {
//             console.log(data);
//             wolframInput.innerHTML = "";
//             data.queryresult.pods.forEach((pod) => {
//                 wolframInput.innerHTML += pod.markup.data;
//             });
//         }).catch((error) => {
//             wolframInput.innerHTML = "<p>Error. Please try again.</p>";
//             console.log(error);
//         })
//     });
// });
