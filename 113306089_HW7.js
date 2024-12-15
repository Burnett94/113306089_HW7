// 編輯名稱功能
let isEditing = false;
const editBtn = document.getElementById('edit-btn');
const nameLabel = document.getElementById('name-label');

editBtn.addEventListener('click', () => {
    if (isEditing) {
        const inputField = document.getElementById('name-input');
        nameLabel.textContent = inputField.value;
        editBtn.textContent = 'Edit';
    } else {
        const currentName = nameLabel.textContent;
        nameLabel.innerHTML = `<input type="text" id="name-input" value="${currentName}">`;
        editBtn.textContent = 'Save';
    }
    isEditing = !isEditing;
});

// 新增音樂功能
const addMusicBtn = document.getElementById('add-music-btn');
const musicGallery = document.getElementById('music-gallery');

addMusicBtn.addEventListener('click', () => {
    // 創建表單
    const form = document.createElement('form');
    form.innerHTML = `
        <input type="text" id="music-link" placeholder="Music Link" required>
        <input type="text" id="music-name" placeholder="Music Name" required>
        <button type="submit">Submit</button>
    `;
    musicGallery.after(form);

    // 表單提交事件
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const link = document.getElementById('music-link').value;
        const name = document.getElementById('music-name').value;

        if (link && name) {
            const albumDiv = document.createElement('div');
            albumDiv.className = 'album';
            albumDiv.innerHTML = `
                <a href="${link}" target="_blank">
                    <img src="YouTube_social_white_circle_(2017).svg" alt="${name}">
                </a>
                <span class="album-name">${name}</span>
            `;
            musicGallery.appendChild(albumDiv);
            form.remove();
        } else {
            alert('Please fill in both fields!');
        }
    });
});