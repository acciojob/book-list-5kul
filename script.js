//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function () {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  if (!title || !author || !isbn) {
    alert('Please fill in all fields');
    return;
  }

  const list = document.getElementById('book-list');
  
  // Create a new table row
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  list.appendChild(row);

  // Clear the form
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Event delegation for deleting rows
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    row.remove();
  }
});
