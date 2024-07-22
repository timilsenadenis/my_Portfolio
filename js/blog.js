// blog.js

document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('blog-posts');

    const posts = [
        {
            profilePic: 'images/profile.jpg',
            authorName: 'Denis Timilsena',
            dateTime: 'June 27, 2024 at 2:00 PM',
            content: 'This is the first dynamic blog post content.',
            postedTime: new Date('2024-06-27T14:00:00')
        },
        {
            profilePic: 'images',
            authorName: 'Denis',
            dateTime: 'June 28, 2024 at 10:00 AM',
            content: 'This is the second dynamic blog post content.',
            postedTime: new Date('2024-06-28T10:00:00')
        }
        // Add more posts as neede
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const postedOnTime = calculatePostedTime(post.postedTime);

        postElement.innerHTML = `
            <div class="post-header">
                <div class="profile-pic">
                    <img src="${post.profilePic}" alt="Author's Profile Picture">
                </div>
                <div class="post-meta">
                    <span class="author-name">${post.authorName}</span>
                    <span class="post-date-time"> • ${post.dateTime}</span>
                    <span class="posted-on-time"> • ${postedOnTime}</span>
                </div>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });

    function calculatePostedTime(postedTime) {
        const now = new Date();
        const diff = now - postedTime; // Difference in milliseconds
        const minutes = Math.floor(diff / 1000 / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'just now';
        }
    }
});
