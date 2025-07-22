import React from 'react';

const quizzes = [
  { id: 1, title: 'General Knowledge' },
  { id: 2, title: 'Science & Nature' },
  { id: 3, title: 'Sports' },
  { id: 4, title: 'History' },
];

export default function QuizList({ onSelectQuiz }) {
  return (
    <div className="quiz-list">
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <button onClick={() => onSelectQuiz(quiz)}>{quiz.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
