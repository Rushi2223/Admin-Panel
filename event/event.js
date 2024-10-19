      // Modal logic
      var eventModal = document.getElementById("eventModal");
      var participantsModal = document.getElementById("participantsModal");
      var closeModal = document.getElementsByClassName("close")[0];
      var modalTitle = document.getElementById("modalTitle");
      var participantsTitle = document.getElementById("participantsTitle");
      var participantsList = document.getElementById("participantsList");

      // Open the event modal
      function openEventModal() {
          modalTitle.textContent = "Add Event";
          eventModal.style.display = "block";
      }

      // Open the participants modal
      function viewParticipants(eventName) {
          participantsTitle.textContent = `Participants for ${eventName}`;
          participantsList.innerHTML = `
              <tr>
                  <td>John Doe</td>
                  <td>12345</td>
                  <td>(555) 123-4567</td>
                  <td>7A</td>
              </tr>
              <tr>
                  <td>Jane Smith</td>
                  <td>12346</td>
                  <td>(555) 987-6543</td>
                  <td>7B</td>
              </tr>
              <!-- Add more rows dynamically here -->
          `;
          participantsModal.style.display = "block";
      }

      // Close the modals
    

      function closeParticipantsModal() {
          participantsModal.style.display = "none";
      }

      window.onclick = function(event) {
          if (event.target == eventModal) {
              eventModal.style.display = "none";
          }
          if (event.target == participantsModal) {
              participantsModal.style.display = "none";
          }
      }

      // Function to save the event
      /*function saveEvent() {
          var eventName = document.getElementById("eventName").value;
          var eventDate = document.getElementById("eventDate").value;
          var eventTime = document.getElementById("eventTime").value;
          var eventLocation = document.getElementById("eventLocation").value;
          var chiefGuest = document.getElementById("chiefGuest").value;
          var eventDescription = document.getElementById("eventDescription").value;

          if (eventName && eventDate && eventTime && eventLocation && chiefGuest && eventDescription) {
              alert("Event saved: " + eventName);
              eventModal.style.display = "none";
          } else {
              alert("Please fill in all fields.");
          }
      }*/