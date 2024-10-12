// Function to disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevents the right-click context menu from opening
}, false);

// Function to disable specific key combinations (like F12, Ctrl+Shift+I, Ctrl+U)
document.addEventListener('keydown', function (e) {
    // Disable F12 (Inspect Element)
    if (e.keyCode == 123) {
        e.preventDefault(); // Prevent default behavior
    }
    // Disable Ctrl+Shift+I (Chrome/Firefox DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        e.preventDefault(); 
    }
    // Disable Ctrl+Shift+J (DevTools Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        e.preventDefault(); 
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        e.preventDefault(); 
    }
});
