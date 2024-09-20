let letters = [];

// 從 letters.json 獲取信件內容
fetch('letters.json')
    .then(response => response.json())
    .then(data => {
        letters = data;
    })
    .catch(error => {
        console.error('無法載入信件內容：', error);
    });

document.getElementById('randomButton').addEventListener('click', () => {
    if (letters.length > 0) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        document.getElementById('letterContent').innerText = randomLetter;
    } else {
        document.getElementById('letterContent').innerText = '信件內容載入中，請稍候再試。';
    }
});
