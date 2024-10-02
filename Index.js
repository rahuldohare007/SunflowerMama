function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const icon = document.getElementById(id.replace('Dropdown', 'Icon'));
  
  if (dropdown.classList.contains('hidden')) {
      dropdown.classList.remove('hidden');
      icon.textContent = '▲'; // Change icon to up-arrow
  } else {
      dropdown.classList.add('hidden');
      icon.textContent = '▼'; // Change icon to down-arrow
  }
}