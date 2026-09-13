document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#pitchForm input');
    const pitchResult = document.getElementById('pitchResult');
    const copyBtn = document.getElementById('copyBtn');
    const copyFeedback = document.getElementById('copyFeedback');

    // Function to assemble pitch text dynamically
    function updatePitch() {
        const name = document.getElementById('name').value.trim();
        const role = document.getElementById('role').value.trim();
        const problem = document.getElementById('problem').value.trim();
        const impact = document.getElementById('impact').value.trim();
        const goal = document.getElementById('goal').value.trim();

        if (!name && !role && !problem && !impact && !goal) {
            pitchResult.textContent = 'Fill in the fields on the left to watch your elevator pitch generate live!';
            return;
        }

        const generatedText = `Hi, I'm ${name || '[Name]'}, a ${role || '[Role]'}. I specialize in ${problem || '[Problem]'} by focusing on ${impact || '[Skill/Project]'}. Right now, I'm actively connecting with people to explore ${goal || '[Goal]'}.`;

        pitchResult.textContent = generatedText;
    }

    // Attach real-time input listeners
    inputs.forEach(input => {
        input.addEventListener('input', updatePitch);
    });

    // Copy to clipboard functionality
    copyBtn.addEventListener('click', () => {
        const textToCopy = pitchResult.textContent;

        if (!textToCopy || textToCopy.startsWith('Fill in the fields')) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
            copyFeedback.classList.add('visible');
            setTimeout(() => {
                copyFeedback.classList.remove('visible');
            }, 2000);
        });
    });
});