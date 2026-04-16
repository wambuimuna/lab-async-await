function displayPosts(posts) {

    const postList = document.getElementById('post-list');
    
    if (!postList) return;

    posts.forEach(post => {
        
        const li = document.createElement('li');
        const title = document.createElement('h1');
        const body = document.createElement('p');

        title.textContent = post.title;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);
        postList.appendChild(li);
    });
}


async function fetchPosts() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        
        displayPosts(posts);
        
    
        return posts; 
    } catch (error) {
        
        console.error('Error fetching posts:', error);
    }
}
if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
    fetchPosts();
}
if (typeof module !== 'undefined') {
    module.exports = { fetchPosts, displayPosts };
}

