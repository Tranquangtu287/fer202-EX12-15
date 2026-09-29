import React, { useReducer } from 'react';

// Khai báo initialState theo đề bài
const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

// Reducer function quản lý state cho Quiz
function questionReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };
    case 'NEXT_QUESTION': {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;
      const nextIndex = state.currentQuestion + 1;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        selectedOption: '',
        currentQuestion: nextIndex,
        showScore: nextIndex >= state.questions.length,
      };
    }
    case 'RESTART_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export default function QuestionBankEx() {
  const [state, dispatch] = useReducer(questionReducer, initialState);

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  const currentQ = state.questions[state.currentQuestion];

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0 auto', 
      backgroundColor: '#22272e', 
      color: '#fff', 
      padding: '30px', 
      borderRadius: '8px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3>2. Question Bank (useReducer)</h3>

      {state.showScore ? (
        <div>
          <h2>Your Score: {state.score}/{state.questions.length}</h2>
          <button 
            onClick={handleRestartQuiz}
            style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              cursor: 'pointer', 
              marginTop: '15px',
              backgroundColor: '#f1f1f1',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>Question {state.currentQuestion + 1}</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>{currentQ.question}</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: state.selectedOption === option ? '#4CAF50' : '#f1f1f1',
                  color: state.selectedOption === option ? '#fff' : '#000',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={!state.selectedOption}
            style={{
              padding: '8px 20px',
              backgroundColor: state.selectedOption ? '#007bff' : '#555',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: state.selectedOption ? 'pointer' : 'not-allowed',
              opacity: state.selectedOption ? 1 : 0.6
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}