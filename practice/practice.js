// Define initial page number
let pageNumber = 1;

// Function to load more content
function loadMoreContent() {
    // Simulating an AJAX request to fetch new content
    // Replace this with actual AJAX request to fetch your data
    setTimeout(() => {
        const contentContainer = document.getElementById('content');
        // Append new content
        for (let i = 1; i <= 5; i++) {
            const newContent = document.createElement('p');
            newContent.textContent = `New Content ${pageNumber * 5 + i}`;
            contentContainer.appendChild(newContent);
        }
        pageNumber++;
    }, 1000); // Simulating a delay of 1 second, replace with actual AJAX call
}

// Event listener for button click
document.getElementById('loadMore').addEventListener('click', loadMoreContent);
