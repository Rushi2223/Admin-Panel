function openViewModal(name, subject, classes, email, phone) {
    document.getElementById('viewTeacherName').textContent = name;
    document.getElementById('viewTeacherSubject').textContent = subject;
    document.getElementById('viewTeacherClasses').textContent = classes;
    document.getElementById('viewTeacherEmail').textContent = email;
    document.getElementById('viewTeacherPhone').textContent = phone;

    // Set data for edit button in view modal
    document.getElementById('editButtonInViewModal').onclick = function() {
        openEditModal(name, subject, classes, email, phone);
        closeModal('infoModal');
    };

    document.getElementById('infoModal').classList.remove('hidden');
}

function openEditModal(name, subject, classes, email, phone) {
    document.getElementById('teacherNameInput').value = name;
    document.getElementById('teacherSubjectInput').value = subject;
    document.getElementById('teacherClassesInput').value = classes;
    document.getElementById('teacherEmailInput').value = email;
    document.getElementById('teacherPhoneInput').value = phone;
    document.getElementById('editModal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function saveChanges() {
    // Logic to save changes (e.g., send data to the server)
    closeModal('editModal');

    // Show success notification
    showNotification('Edit Teacher Successfully');
}

function deleteTeacher(row) {
    // Confirm before deleting
    if (confirm("Are you sure you want to delete this teacher?")) {
        // Delete the row from the table
        row.closest('tr').remove();

        // Optionally, send a request to the server to delete the teacher record from the database

        alert("Teacher deleted successfully.");
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 1000);
    }, 3000);
}