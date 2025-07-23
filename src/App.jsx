import { renderNavBar } from './components/navbar.js';
import { renderRegisterForm } from './components/registerForm.js';
import { renderQuizList } from './components/quizList.js';
import { renderQuestionCard } from './components/questionCard.js';
import { renderGameControls } from './components/gameControls.js';
import { renderResultsPage } from './components/resultsPage.js';
import { renderAboutPage } from './pages/about.js';
import { questionsData } from './data/questions.js';
import { fetchApiQuestions } from './data/fetchApiQuestions.js';

const container = document.querySelector('.container');

let state = {
    page: 'register',
    user: null,
    category: null,
    level: null,
    questions: [],
    current: 0,
    answers: [],
    paused: false,
    timeLeft: 60,
    timer: null
};
