// Get all dropdown elements
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through each dropdown to add click functionality
dropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  // Toggle the dropdown on click
  dropdown.addEventListener("click", () => {
    dropdownContent.classList.toggle("hidden");
  });
});

// Close the dropdown if clicked outside of it
window.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    // If the clicked element is not inside the dropdown, hide the dropdown
    if (!dropdown.contains(event.target)) {
      dropdownContent.classList.add("hidden");
    }
  });
});
