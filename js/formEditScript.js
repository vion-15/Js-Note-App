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

    const deleteData = berkas.filter(item => item.id != searchId);

    const title = document.getElementById('titleTask');
    const content = document.getElementById('content');
    const date = new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    });

    deleteData.push({
        'id': Date.now(),
        'title': title.value,
        'content': content.value,
        'createAt': date,
    });

    localStorage.setItem('data', JSON.stringify(deleteData));

    title.value = "";
    content.value = "";

    window.location.href = '../index.html';
});