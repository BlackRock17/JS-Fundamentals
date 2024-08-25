function attachEvents() {

    const BASE_URL = "http://localhost:3030/jsonstore/messenger";

    async function customFetch(url, options) {
        return fetch(url, options).then((res) => res.json());
    };

    const submitElement = document.getElementById("submit");
    const refreshElement = document.getElementById("refresh");
    const messagesElement = document.getElementById("messages");

    const [authorInputElement, contentInputElement] = document.querySelectorAll(
        "div#controls input[type='text']"
    );

    function createMessageHandler() {
        customFetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author: authorInputElement.value,
                content: contentInputElement.value,
            }),
        }).then(() => {
            authorInputElement.value = "";
            contentInputElement.value = "";
        });
    }

    function appendMessages (messagesResponse) {
        messagesElement.textContent = Object.values(messagesResponse)
            .map(({ author, content }) => `${author}: ${content}`)
            .join("\n");
    }

    function getAllMessagesHandler() {
        customFetch(BASE_URL).then(appendMessages);
    }

    submitElement.addEventListener('click', createMessageHandler)
    refreshElement.addEventListener('click', getAllMessagesHandler);
}

attachEvents();