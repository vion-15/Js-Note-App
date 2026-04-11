
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    const data = JSON.parse(localStorage.getItem('data'));

    data.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('note-card');
        card.innerHTML = `<h3>${data.title}</h3></br><p>${data.createAt}</p>`;
        container.appendChild(card);
    });
});

const btnTambah = document.getElementById("tambahBtn");

btnTambah.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementById("titleTask");
    const content = document.getElementById("content");
    const date = new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    });

    let data = JSON.parse(localStorage.getItem('data')) || [];

    data.push({
        'title': title.value,
        'content': content.value,
        'createAt': date,
    });

    localStorage.setItem('data', JSON.stringify(data));

    console.log(data);

    title.value = "";
    content.value = "";

    window.location.href = "../index.html";
});