const addBtn = document.getElementById('btn');
const parentList = document.getElementById('text');


addBtn.addEventListener('click', () => {
  setTimeout(() => {
  const childList = document.createElement('h2');
  childList.textContent = 'ボタンをクリックしました';
  parentList.appendChild(childList);
  }, 2000);
});
