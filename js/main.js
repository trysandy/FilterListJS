document.getElementById('nameInput').addEventListener('keyup', filterNames);

function filterNames() {
  let nameInput = document.getElementById('nameInput').value.toUpperCase();
  let nameOutput = document.getElementById('nameOutput');
  let li = nameOutput.querySelectorAll('li.collection-item');

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    if (a.innerHTML.toUpperCase().indexOf(nameInput) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
