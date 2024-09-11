document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var checkContainer = document.getElementById(targetId);
        checkContainer.classList.toggle('active');
        checkContainer.classList.toggle('hidden');
    });
});