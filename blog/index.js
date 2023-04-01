// Get the search form and add an event listener to it
var searchForm = document.querySelector('form');
searchForm.addEventListener('submit', function(event) {
	event.preventDefault();
	var searchInput = searchForm.querySelector('input[type="text"]');
	var searchTerm = searchInput.value.toLowerCase();
	var blogPosts = document.querySelectorAll('.blog-post');
	var matchedPosts = [];
	blogPosts.forEach(function(post) {
		var searchableText = post.getAttribute('data-searchable').toLowerCase();
		if (searchableText.indexOf(searchTerm) > -1) {
			matchedPosts.push(post);
		}
	});
	if (matchedPosts.length > 0) {
		alert('Search results for: ' + searchTerm);
		matchedPosts.forEach(function(post) {
			// Do something with the matched posts, such as highlighting them or showing them in a list
			post.style.backgroundColor = '#f2f2f2';
		});
	} else {
		alert('No results found for: ' + searchTerm);
	}
	searchInput.value = '';
});

