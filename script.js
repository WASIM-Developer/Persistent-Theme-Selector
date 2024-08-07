document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const resetBtn = document.querySelector('.reset-btn');

    // Load saved theme from localStorage
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    // Toggle dropdown visibility
    dropbtn.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    // Change background color based on selection
    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedColor = this.getAttribute('data-color');
            if (selectedColor === 'default') {
                document.body.style.backgroundColor = ''; // Reset to default
                localStorage.removeItem('selectedColor'); // Remove saved color
            } else {
                document.body.style.backgroundColor = selectedColor;
                localStorage.setItem('selectedColor', selectedColor); // Save selected color
            }
            dropdown.classList.remove('show'); // Hide dropdown after selection
        });
    });

    // Reset the background color to default
    resetBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = ''; // Reset to default
        localStorage.removeItem('selectedColor'); // Remove saved color
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });
});
