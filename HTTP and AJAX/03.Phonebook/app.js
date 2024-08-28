function attachEvents() {

    const BASE_URL = "http://localhost:3030/jsonstore/phonebook";

    async function customFetch (url, options) {
        try {
            const data = await fetch(url, options).then((res) => res.json());
            return {data, error: null};
        } catch (error) {
            console.error(error);
            return {data: null, error};
        }
    }

    const phonebookElement = document.getElementById("phonebook");
    const loadButtonElement = document.getElementById("btnLoad");
    const createButtonElement = document.getElementById("btnCreate");

    const [personInputElement, phoneInputElement] = document.querySelectorAll("input");

    async function fetchAllContacts() {
        const { data, error} = await customFetch(BASE_URL);
        
        if (error) {
            return;
        }

        const posts = Object.values(data);

        appendAllContactElements(posts);
    }

    function deleteContact(contact) {
        console.log(contact);
        
    }

    function appendAllContactElements (posts) {
        posts.forEach((contact) => {
            const { person, phone } = contact;
            const liElement = document.createElement("li");

            liElement.textContent = `${person}: ${phone}`;
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.textContent = "DELETE";

            deleteButtonElement.addEventListener("click", () => deleteContact(contact));

            liElement.appendChild(deleteButtonElement);

            phonebookElement.appendChild(liElement);
        });
    }

    loadButtonElement.addEventListener("click", fetchAllContacts);
}

attachEvents();