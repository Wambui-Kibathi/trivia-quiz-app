import React from 'react';

const quizzes = [
  { id: 1, title: 'General Knowledge' },
  { id: 2, title: 'History' },
  { id: 3, title: 'Entertainment: Television' },
  { id: 4, title: 'Entertainment: Video Games' },
  { id: 5, title: 'Entertainment: Music' },
  { id: 6, title: 'Science & Nature' },
  { id: 7, title: 'Politics' },
  { id: 8, title: 'Geography' },
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
