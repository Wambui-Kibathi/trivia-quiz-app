export function renderAboutPage() {
    const div = document.createElement('div');
    div.className = 'about-page';
    div.innerHTML = `
        <h2>About Trivia Quiz Game</h2>
        <p>Welcome to <span style="color:#00eaff;font-weight:bold;">Trivia Quiz Game</span>!<br><br>
        Test your knowledge across multiple categories and levels.<br>
        Register to play, answer questions, beat the timer, and see your results.<br><br>
        <span style="color:#43e97b;">Can you become the ultimate trivia champion?</span></p>
    `;
    return div;
}