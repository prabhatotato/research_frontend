    document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query !== '') {
            fetchSearchResults(query);
        }
    });

    function fetchSearchResults(query) {
        // Replace 'YOUR_API_KEY' and 'YOUR_CX' with your own API key and CX
        const apiKey = 'AIzaSyBYa5pXk1m0MQ11pmg-v3b1a4CEnsRS5KE';
        const cx = 'c5141fbdbb24e434a';
        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                displayResults(data.items);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    }

    function displayResults(results) {
        searchResults.innerHTML = ''; // Clear previous results

        if (results && results.length > 0) {
            results.forEach((result) => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('search-result');

                const titleElement = document.createElement('h2');
                titleElement.textContent = result.title;

                const linkElement = document.createElement('a');
                linkElement.href = result.link;
                linkElement.textContent = result.link;

                resultElement.appendChild(titleElement);
                resultElement.appendChild(linkElement);

                searchResults.appendChild(resultElement);
            });
        } else {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No results found.';
            searchResults.appendChild(noResultsMessage);
        }
    }
});