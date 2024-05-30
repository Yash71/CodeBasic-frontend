window.onload = function () {

    const codeTextarea = document.getElementById('code');
    const inputTextarea = document.getElementById('input');
    const outputPre = document.getElementById('output');
    const runButton = document.getElementById('runButton');

    function updateOutput() {
        // Simulate running the code (replace with actual backend processing)
        const code = codeTextarea.value;
        const input = inputTextarea.value;
        // const output = runCode(code, input);

        // Display output
        // outputPre.textContent = output;
    }

    // runButton.addEventListener('click', () => {
    //     const code = document.getElementById('code').value;
    //     const input = document.getElementById('input').value;

    //     fetch(baseUrl,{
    //         const

    //     })
    // });
    const baseUrl = 'http://localhost:3000/execute'
    runButton.addEventListener('click', getInfo)
    async function getInfo(e) {
        e.preventDefault();
        const code = codeTextarea.value;
        const res = await fetch(`${baseUrl}?code=${encodeURIComponent(JSON.stringify(code))}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const data = await res.text();
        // console.log(res);
        const data=await res.output();
        // console.log(res.text());
        // outputPre.textContent = data;



        // console.log(res)
        // console.log(res);



    }


    // Prevent default tab behavior in the code editor
    const editor = document.querySelector('.editor');
    editor.addEventListener('keydown', function (event) {
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
