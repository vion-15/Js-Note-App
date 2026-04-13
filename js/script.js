document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    if(!container)return;

    const datas = JSON.parse(localStorage.getItem('data')) || [];

    datas.forEach(data => {
        const card = document.createElement('a');
        card.href = `/pages/formEdit.html?id=${data.id}`
        card.classList.add('note-card');
        card.innerHTML = `<h3>${data.title}</h3></br><p>${data.createAt}</p>`;
        container.appendChild(card);
    });
});

const btnTambah = document.getElementById("tambahBtn");

if (btnTambah) {
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
            'id': Date.now(),
            'title': title.value,
            'content': content.value,
            'createAt': date,
        });

        localStorage.setItem('data', JSON.stringify(data));

        title.value = "";
        content.value = "";

        window.location.href = "../index.html";
    });
}


const btnEdit = document.getElementById('editBtn');
const params = new URLSearchParams(window.location.search);
const searchId = params.get('id');
const berkas = JSON.parse(localStorage.getItem('data')) || [];
const detail = berkas.find(item => item.id == searchId);
const title = document.getElementById('titleTask');
const content = document.getElementById('content');

title.value = detail.title || '';
content.value = detail.content || '';

btnEdit.addEventListener('click', (e) => {
    e.preventDefault();

    if(searchId == detail.id){
    }
})
