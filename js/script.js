
// me-load content ke index.html
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    const datas = JSON.parse(localStorage.getItem('data')) || [];

    datas.forEach(data => {
        const card = document.createElement('a');
        card.href = `/pages/formEdit.html?id=${data.id}`
        card.classList.add('note-card');
        card.innerHTML = `<h3>${data.title}</h3></br><p>${data.createAt}</p>`;
        card.style.textDecoration = 'none';
        card.style.color = 'black';
        container.appendChild(card);
    });
});
