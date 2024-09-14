window.addEventListener("load", solve);

function solve() {
  const elements = {
      form: document.querySelector('form'),
      addBtn: document.querySelector('#add-btn'),
      eventNameInput: document.querySelector('#name'),
      dateInput: document.querySelector('#time'),
      descriptionInput: document.querySelector('#description'),
      previewList: document.querySelector('#preview-list'),
      archiveList: document.querySelector('#archive-list')
  };

  elements.form.addEventListener('submit', function(e) {
      e.preventDefault();
      addEvent();
  });

  function addEvent() {
      const eventName = elements.eventNameInput.value.trim();
      const date = elements.dateInput.value.trim();
      const description = elements.descriptionInput.value.trim();

      if (eventName && date && description) {
          const li = createEventElement(eventName, date, description);
          elements.previewList.appendChild(li);
          clearInputs();
          elements.addBtn.disabled = true;
      }
  }

  function createEventElement(name, date, description) {
      const li = document.createElement('li');
      li.innerHTML = `
          <article>
              <p>${name}</p>
              <p>${date}</p>
              <p>${description}</p>
          </article>
          <div class="buttons">
              <button class="edit-btn">Edit</button>
              <button class="next-btn">Next</button>
          </div>
      `;

      li.querySelector('.edit-btn').addEventListener('click', () => editEvent(li, name, date, description));
      li.querySelector('.next-btn').addEventListener('click', () => moveToArchive(li));

      return li;
  }

  function editEvent(li, name, date, description) {
      elements.eventNameInput.value = name;
      elements.dateInput.value = date;
      elements.descriptionInput.value = description;
      li.remove();
      elements.addBtn.disabled = false;
  }

  function moveToArchive(li) {
      const article = li.querySelector('article').cloneNode(true);
      const archiveLi = document.createElement('li');
      archiveLi.appendChild(article);

      const archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('archive-btn');
      archiveBtn.addEventListener('click', () => archiveLi.remove());

      archiveLi.appendChild(archiveBtn);
      elements.archiveList.appendChild(archiveLi);
      li.remove();
      elements.addBtn.disabled = false;
  }

  function clearInputs() {
      elements.eventNameInput.value = '';
      elements.dateInput.value = '';
      elements.descriptionInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', solve);