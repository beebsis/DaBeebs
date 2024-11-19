// Get the checkbox and the taskLog widget
const borderToggle = document.getElementById("borderToggle");
const taskLogWidgets = document.querySelectorAll(".taskLog");

/**
 * ! Border toggles
 */
// Event listener to toggle the border on/off based on checkbox state
borderToggle.addEventListener("change", () => {
    taskLogWidgets.forEach((widget) => {
        if (borderToggle.checked) {
            widget.classList.remove("no-borders");
        } else {
            widget.classList.add("no-borders");
        }
    });
});

/**
 * Theme Switx  cher Script
 */

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('light-theme');
});




// Get all theme options
const themeOptions = document.querySelectorAll('.custom-select .option');
const selectedOption = document.querySelector('.custom-select .selected-option');
const customSelect = document.querySelector('.custom-select');

// Toggle the dropdown visibility when clicking the selected option
selectedOption.addEventListener('click', function() {
    customSelect.classList.toggle('active'); // Toggle visibility of the options
});

// Add event listeners to each option to switch themes
themeOptions.forEach(option => {
    option.addEventListener('click', function () {
        const theme = option.getAttribute('data-theme');

        // Reset all theme classes
        document.body.classList.remove('light-theme', 'dark-theme', 'seasonal-theme');

        // Add the new theme class
        document.body.classList.add(`${theme}-theme`);

        // Update the selected option text
        selectedOption.textContent = option.textContent;
        selectedOption.setAttribute('data-theme', theme);

        // Close the dropdown after selecting an option
        customSelect.classList.remove('active');
    });
});

// Close the dropdown if clicking anywhere outside of it
document.addEventListener('click', function(event) {
    if (!customSelect.contains(event.target)) {
        customSelect.classList.remove('active');
    }
});


