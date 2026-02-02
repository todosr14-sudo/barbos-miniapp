const counterEl = document.getElementById('counter');
const btn = document.getElementById('clickBtn');


let count = localStorage.getItem('barbos_clicks');
count = count ? parseInt(count) : 0;


counterEl.textContent = count;


btn.addEventListener('click', () => {
count++;
counterEl.textContent = count;
localStorage.setItem('barbos_clicks', count);
});