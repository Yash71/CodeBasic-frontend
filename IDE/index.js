// Run code when the page loads
window.onload = function() {

    const codeTextarea = document.getElementById('code');
    const inputTextarea = document.getElementById('input');
    const outputPre = document.getElementById('output');
    const runButton = document.getElementById('runButton');
    
    runButton.addEventListener('click', updateOutput);
    codeTextarea.addEventListener('input', updateOutput);
    inputTextarea.addEventListener('input', updateOutput);

    function updateOutput() {
        // Simulate running the code (replace with actual backend processing)
        const code = codeTextarea.value;
        const input = inputTextarea.value;
        const output = runCode(code, input);

        // Display output
        outputPre.textContent = output;
    }

    function runCode(code, input) {
        // Simulate running the code (replace with actual backend processing)
        // For now, just return a simple message
        return 'Output will appear here.';
    }

    // Prevent default tab behavior in the code editor
    const editor = document.querySelector('.editor');
    editor.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            event.preventDefault();

            // Get the current cursor position
            const start = this.selectionStart;
            const end = this.selectionEnd;

            // Insert a tab character at the current cursor position
            this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

            // Move the cursor to the position after the inserted tab
            this.selectionStart = this.selectionEnd = start + 1;
        }
    });
};
