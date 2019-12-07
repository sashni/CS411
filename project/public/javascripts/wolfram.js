console.log('Client side javascript is loaded.');

const mathpixForm = document.querySelector('#mathpix-form');
const mathpixSearch = document.querySelector('#mathpix-search');
const mathpixInput = document.querySelector('#mathpix-input');
const wolframForm = document.querySelector('#wolfram-form');
const wolframSearch = document.querySelector('#wolfram-search');
const wolframInput = document.querySelector('#wolfram-input');


mathpixForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const photo = mathpixSearch.files[0];
    const formData = new FormData();
    formData.append("photo", photo);
    fetch('/upload/image', {method: "POST", body: formData}).then((response) => {
        response.json().then((data) => {
            const imgPath = `./uploads/images/${data.filename}`;
            console.log('imgPath', imgPath);
            mathpixInput.innerHTML = `<img src="${imgPath}">`;
            console.log('done', data);
        })
    });
});

wolframForm.addEventListener('submit', (event) => {
    event.preventDefault();
    wolframInput.innerHTML = "<p>Calculating...</p>";

    fetch(`/wolfram?string=${wolframSearch.value}`).then((response) => {
        response.json().then((data) => {
            wolframInput.innerHTML = "";
            data.queryresult.pods.forEach((pod) => {
                wolframInput.innerHTML += pod.markup.data;
            });
        }).catch((error) => {
            wolframInput.innerHTML = "<p>Error. Please try again.</p>";
            console.log(error);
        })
    });
});

