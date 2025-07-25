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

function render() {
    container.innerHTML = '';
    container.appendChild(renderNavBar(handleNavigate));
    if (state.page === 'register') {
        container.appendChild(renderRegisterForm(handleRegister));
    } else if (state.page === 'quiz-list') {
        container.appendChild(renderQuizList(handleSelectQuiz));
    } else if (state.page === 'quiz') {
        renderQuizPage();
    } else if (state.page === 'results') {
        renderResults();
    } else if (state.page === 'about') {
        container.appendChild(renderAboutPage());
    }
}

function handleNavigate(page) {
    if (page === 'quiz') {
        if (!state.user) {
            state.page = 'register';
        } else {
            state.page = 'quiz-list';
        }
    } else {
        state.page = page;
    }
    render();
}

function handleRegister(username) {
    state.user = username;
    state.page = 'quiz-list';
    render();
}

function handleSelectQuiz(category, level, customQuestions) {
    state.category = category;
    state.level = level;
    state.questions = customQuestions || questionsData.filter(q => q.category === category && q.level === level);
    state.current = 0;
    state.answers = [];
    state.page = 'quiz';
    state.timeLeft = 60;
    state.paused = false;
    startTimer();
    render();
}

function handleAnswer(idx) {
    state.answers[state.current] = idx;
    if (state.current < state.questions.length - 1) {
        state.current++;
        render();
    } else {
        stopTimer();
        state.page = 'results';
        render();
    }
}

function handlePause() {
    state.paused = true;
    stopTimer();
    render();
}

function handleResume() {
    state.paused = false;
    startTimer();
    render();
}

function handleNext() {
    if (state.current < state.questions.length - 1) {
        state.current++;
        render();
    }
}

function handlePrev() {
    if (state.current > 0) {
        state.current--;
        render();
    }
}

function handleRestart() {
    state.page = 'quiz-list';
    render();
}

function startTimer() {
    stopTimer();
    state.timer = setInterval(() => {
        if (!state.paused) {
            state.timeLeft--;
            if (state.timeLeft <= 0) {
                stopTimer();
                state.page = 'results';
                render();
            } else {
                render();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
}

function renderQuizPage() {
    container.appendChild(renderGameControls({
        onPause: handlePause,
        onResume: handleResume,
        onNext: handleNext,
        onPrev: handlePrev,
        isPaused: state.paused,
        timeLeft: state.timeLeft
    }));
    container.appendChild(renderQuestionCard(state.questions[state.current], handleAnswer));
}

function renderResults() {
    const wrongAnswers = state.questions.map((q, i) => {
        if (state.answers[i] !== q.answer) {
            return {
                question: q.text,
                userAnswer: q.choices[state.answers[i]] || 'No answer',
                correctAnswer: q.choices[q.answer]
            };
        }
        return null;
    }).filter(Boolean);
    const score = state.questions.reduce((acc, q, i) => acc + (state.answers[i] === q.answer ? 1 : 0), 0);
    container.appendChild(renderResultsPage({
        score,
        total: state.questions.length,
        wrongAnswers,
        onRestart: handleRestart
    }));
}

render();