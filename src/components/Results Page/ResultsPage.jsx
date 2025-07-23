export function ResultsPage({ score, total, wrongAnswers, onRestart }) {
    return (
        <div className="results-page neon-card">
            <h2 className="game-title">Quiz Results</h2>
            <p className="score-label">Your Score: <span>{score} / {total}</span></p>
            <h3>Review Wrong Answers</h3>
            <ul className="wrong-list">
                <li>Perfect! No wrong answers.</li>
            </ul>
            <div className="game-btn-row">
                <button>
                </button>
            </div>
        </div>
    );
}