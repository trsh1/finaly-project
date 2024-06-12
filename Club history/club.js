document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMore');
    const historyText = document.getElementById('historyText');

    loadMoreBtn.addEventListener('click', function() {
        historyText.innerHTML += " In the subsequent years, the club has grown to become one of the most successful teams in the region, with numerous league titles and cup victories. The club's commitment to developing young talent and playing attractive football has endeared it to fans across the globe. The stadium, known as [Stadium Name], has witnessed countless memorable moments and remains a fortress for the team. Today, [Football Club] continues to strive for excellence both on and off the pitch, aiming to add more silverware to its already impressive trophy cabinet.";
        loadMoreBtn.style.display = 'none';
    });
});