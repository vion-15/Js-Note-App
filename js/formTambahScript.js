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
