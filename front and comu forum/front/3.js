document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    // Get form data
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
   
    // Create a new post element
    const newPost = document.createElement('li');
    newPost.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
    `;
   
    // Add the new post to the list
    document.getElementById('posts-list').appendChild(newPost);
   
    // Clear the form
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
   });