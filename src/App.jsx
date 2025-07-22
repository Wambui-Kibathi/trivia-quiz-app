
import React, { useState } from 'react';
import QuizList from './components/QuizList';
import QuestionsCard from './components/QuestionsCard';
import './App.css';
import './TriviaMania.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <div className="trivia-mania-app">
      <h1>Trivia Mania</h1>
      {!selectedQuiz ? (
        <QuizList onSelectQuiz={setSelectedQuiz} />
      ) : (
        <QuestionsCard quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      )}
    </div>
  );
}

export default App;
