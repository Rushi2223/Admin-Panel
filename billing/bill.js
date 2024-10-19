$(document).ready(function() {
    $('#studentModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var name = button.data('name');
        var id = button.data('id');
        var studentClass = button.data('class');
        var term1 = button.data('term1');
        var term2 = button.data('term2');
        var total = button.data('total');
        var phone = button.data('phone');

        var modal = $(this);
        modal.find('#modalName').text(name);
        modal.find('#modalID').text(id);
        modal.find('#modalClass').text(studentClass);
        modal.find('#modalTerm1').text(term1);
        modal.find('#modalTerm2').text(term2);
        modal.find('#modalTotal').text(total);
        modal.find('#modalPhone').text(phone);
    });
});
function updateDashboard() {
    $.ajax({
        url: 'http://127.0.0.1:5500/admin/billing/bill.html', // URL to your API endpoint
        method: 'GET',
        success: function(data) {
            $('#total-users').text(data.totalUsers);
            $('#pending-fees').text(data.pendingFees);
            $('#accepted').text(data.acceptedFees);
            $('#total-fees').text(data.totalFees);
        },
        error: function(error) {
            console.error('Error fetching dashboard data:', error);
        }
    });
}

// Call updateDashboard function to update the dashboard on page load
$(document).ready(function() {
    updateDashboard();

    // Optionally, set an interval to update the dashboard periodically
    setInterval(updateDashboard, 60000); // Update every 60 seconds
});

  // JavaScript for View, Edit, and Delete functionality

  function viewBill(button) {
    const row = button.closest('tr');
    const billId = row.cells[0].innerText;
    const title = row.cells[1].innerText;
    const amount = row.cells[2].innerText;
    const dueDate = row.cells[3].innerText;
    const paymentMethod = row.cells[4].innerText;
    const status = row.cells[5].innerText;

    const modalContentInner = document.getElementById('modal-content-inner');
    modalContentInner.innerHTML = `
        <h2>Bill Details</h2>
        <p><strong>Bill ID:</strong> ${billId}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Due Date:</strong> ${dueDate}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;

    document.getElementById('modal').classList.add('show');
}

function editBill(button) {
    const row = button.closest('tr');
    const billId = row.cells[0].innerText;
    const title = row.cells[1].innerText;
    const amount = row.cells[2].innerText;
    const dueDate = row.cells[3].innerText;
    const paymentMethod = row.cells[4].innerText;
    const status = row.cells[5].innerText;

    const modalContentInner = document.getElementById('modal-content-inner');
    modalContentInner.innerHTML = `
        <h2>Edit Bill</h2>
        <form id="editForm">
            <label>Bill ID: ${billId}</label><br>
            <label>Title:</label><input type="text" name="title" value="${title}"><br>
            <label>Amount:</label><input type="text" name="amount" value="${amount}"><br>
            <label>Due Date:</label><input type="date" name="dueDate" value="${dueDate}"><br>
            <label>Payment Method:</label><input type="text" name="paymentMethod" value="${paymentMethod}"><br>
            <label>Status:</label>
            <select name="status">
                <option value="paid" ${status === 'Paid' ? 'selected' : ''}>Paid</option>
                <option value="unpaid" ${status === 'Unpaid' ? 'selected' : ''}>Unpaid</option>
                <option value="pending" ${status === 'Pending' ? 'selected' : ''}>Pending</option>
            </select><br>
            <button type="button" class="save" onclick="saveBill(this)">Save</button>
        </form>
    `;

    document.getElementById('modal').classList.add('show');
}

function saveBill(button) {
    const form = button.closest('form');
    const row = document.querySelector(`#billTable tr`);
    const title = form.elements['title'].value;
    const amount = form.elements['amount'].value;
    const dueDate = form.elements['dueDate'].value;
    const paymentMethod = form.elements['paymentMethod'].value;
    const status = form.elements['status'].value;

    row.cells[1].innerText = title;
    row.cells[2].innerText = amount;
    row.cells[3].innerText = dueDate;
    row.cells[4].innerText = paymentMethod;
    row.cells[5].innerText = status.charAt(0).toUpperCase() + status.slice(1);

    document.getElementById('modal').classList.remove('show');
}

function deleteBill(button) {
    const row = button.closest('tr');
    row.remove();
}

// Modal Close
document.getElementById('modal-close').onclick = function () {
    document.getElementById('modal').classList.remove('show');
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').classList.remove('show');
    }
} 


