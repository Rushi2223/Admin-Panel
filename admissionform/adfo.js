
document.getElementById('add-student-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Assuming form data validation and submission logic here
    var isValid = true; // Replace with actual validation logic
    var notificationContainer = document.getElementById('notification-container');

    if (isValid) {
        showNotification('Student added successfully!', 'success');
    } else {
        showNotification('Failed to add student. Please try again.', 'error');
    }
});

function showNotification(message, type) {
    var notification = document.createElement('div');
    notification.className = 'notification ' + (type === 'success' ? 'success' : 'error');
    notification.innerHTML = message + '<button class="close-btn" onclick="closeNotification(this)">×</button>';
    document.getElementById('notification-container').appendChild(notification);

    // Auto-remove notification after 5 seconds
    setTimeout(function() {
        if (notification) notification.remove();
    }, 5000);
}

function closeNotification(button) {
    button.parentElement.remove();
}

// Add Another button functionality
document.querySelector('.add-another-btn').addEventListener('click', function() {
    document.getElementById('add-student-form').reset();
});
