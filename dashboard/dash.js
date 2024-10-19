function showOrderDetails(title, data) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('activity-type').textContent = 'Order Information';
    const content = `
        <div class="order-details">
            <p>Order #: ${data.orderNumber}</p>
            <p>Customer: ${data.customerName}</p>
            <p>Total: ${data.orderTotal}</p>
            <p>Date: ${data.orderDate}</p>
        </div>
        <div class="order-items">
            <h5>Items</h5>
            ${data.items.map(item => `<div class="order-item"><span>${item.name} (x${item.quantity})</span><span>${item.price}</span></div>`).join('')}
        </div>`;
    document.getElementById('activity-content').innerHTML = content;
    openModal();
}

function showPaymentDetails(title, data) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('activity-type').textContent = 'Payment Information';
    const content = `
        <div class="payment-details">
            <p>Amount: ${data.paymentAmount}</p>
            <p>Invoice #: ${data.invoiceNumber}</p>
            <p>Date: ${data.paymentDate}</p>
            <p>Payer: ${data.payer}</p>
        </div>`;
    document.getElementById('activity-content').innerHTML = content;
    openModal();
}

function showLoginDetails(title, data) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('activity-type').textContent = 'Login Information';
    const content = `
        <div class="login-details">
            <p>Username: ${data.username}</p>
            <p>Login Time: ${data.loginTime}</p>
            <p>IP Address: ${data.ipAddress}</p>
        </div>`;
    document.getElementById('activity-content').innerHTML = content;
    openModal();
}

function openModal() {
    const modal = document.getElementById('activity-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('activity-modal');
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-100px)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}
// Task Management
function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskAssignee = document.getElementById('taskAssignee').value;
    if (taskName && taskAssignee) {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="task-text">${taskName} - Assigned to ${taskAssignee}</span>
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleTaskStatus(this)">Mark as Completed</button>
                <button class="pending-btn" onclick="toggleTaskStatus(this)">Mark as Pending</button>
            </div>`;
        taskList.appendChild(taskItem);
        // Clear input fields
        document.getElementById('taskName').value = '';
        document.getElementById('taskAssignee').value = '';
    } else {
        alert('Please fill out both fields.');
    }
}
       // Function to toggle task status
       function toggleTaskStatus(button) {
    const taskItem = button.closest('.task-item');
    const isCompleted = button.classList.contains('complete-btn');
    if (isCompleted) {
        taskItem.querySelector('.task-text').style.textDecoration = 'line-through';
        button.style.display = 'none';
        taskItem.querySelector('.pending-btn').style.display = 'inline-block';
    } else {
        taskItem.querySelector('.task-text').style.textDecoration = 'none';
        button.style.display = 'none';
        taskItem.querySelector('.complete-btn').style.display = 'inline-block';
    }
}
