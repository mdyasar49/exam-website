import React, { useEffect, useState } from "react";
import './QuestionData.css';
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Box,
} from "@mui/material";


function QuestionData() {
  const navigate = useNavigate();

    const questionData = [
      {
          "questionId": "1",
          "question": " What is the capital of Japan?",
          "options": [
              { "id": "1", "label": "Beijing" },
              { "id": "2", "label": "Seoul" },
              { "id": "3", "label": "Tokyo" },
              { "id": "4", "label": "Bangkok" },
          ],
          "correctAnswer": "3",
      },
      {
          "questionId": "2",
          "question": " Which element has the chemical symbol 'O'?",
          "options": [
              { "id": "1", "label": "Oxygen" },
              { "id": "2", "label": "Gold" },
              { "id": "3", "label": "Iron" },
              { "id": "4", "label": "Silver" },
          ],
          "correctAnswer": "1",
      },
      {
          "questionId": "3",
          "question": " Who is known as the 'Father of Computer Science'?",
          "options": [
              { "id": "1", "label": "Bill Gates" },
              { "id": "2", "label": "Alan Turing" },
              { "id": "3", "label": "Steve Jobs" },
              { "id": "4", "label": "Mark Zuckerberg" },
          ],
          "correctAnswer": "2",
      },
      {
          "questionId": "4",
          "question": " In what year did the Titanic sink?",
          "options": [
              { "id": "1", "label": "1912" },
              { "id": "2", "label": "1920" },
              { "id": "3", "label": "1935" },
              { "id": "4", "label": "1941" },
          ],
          "correctAnswer": "1",
      },
      {
          "questionId": "5",
          "question": " Which country is known as the 'Land of the Rising Sun'?",
          "options": [
              { "id": "1", "label": "China" },
              { "id": "2", "label": "Japan" },
              { "id": "3", "label": "India" },
              { "id": "4", "label": "Australia" },
          ],
          "correctAnswer": "2",
      },
      {
          "questionId": "6",
          "question": " What is the largest mammal in the world?",
          "options": [
              { "id": "1", "label": "Elephant" },
              { "id": "2", "label": "Blue Whale" },
              { "id": "3", "label": "Giraffe" },
              { "id": "4", "label": "Hippopotamus" },
          ],
          "correctAnswer": "2",
      },
      {
          "questionId": "7",
          "question": " Which planet is known as the 'Morning Star'?",
          "options": [
              { "id": "1", "label": "Mars" },
              { "id": "2", "label": "Venus" },
              { "id": "3", "label": "Mercury" },
              { "id": "4", "label": "Jupiter" },
          ],
          "correctAnswer": "2",
      },
      {
          "questionId": "8",
          "question": " Who painted the Mona Lisa?",
          "options": [
              { "id": "1", "label": "Pablo Picasso" },
              { "id": "2", "label": "Vincent van Gogh" },
              { "id": "3", "label": "Leonardo da Vinci" },
              { "id": "4", "label": "Claude Monet" },
          ],
          "correctAnswer": "3",
      },
      {
          "questionId": "9",
          "question": "What is the largest ocean on Earth?",
          "options": [
              { "id": "1", "label": "Atlantic Ocean" },
              { "id": "2", "label": "Indian Ocean" },
              { "id": "3", "label": "Arctic Ocean" },
              { "id": "4", "label": "Pacific Ocean" },
          ],
          "correctAnswer": "4",
      },
      {
          "questionId": "10",
          "question": " Who wrote 'To Kill a Mockingbird'?",
          "options": [
              { "id": "1", "label": "J.K. Rowling" },
              { "id": "2", "label": "Harper Lee" },
              { "id": "3", "label": "George Orwell" },
              { "id": "4", "label": "Ernest Hemingway" },
          ],
          "correctAnswer": "2",
      },
    ]
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const [reviewMode, setReviewMode] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [timer, setTimer] = useState(120);
    const location = useLocation();
  
    useEffect(() => {
      if (location.state && location.state.reviewMode && location.state.selectedAnswers) {
        setSelectedAnswers(location.state.selectedAnswers);
        setReviewMode(true);
      }
    }, [location.state]);
  
    const handleOptionChange = (questionId, optionId, correctAnswer) => {
      if(!reviewMode){
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: {
          optionId,
          isCorrect: optionId === correctAnswer,
        },
      }))};
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < questionData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
   
    
    const handleData = () => {
      const unanswered = questionData.filter(({ questionId }) => !selectedAnswers[questionId]);
      if (unanswered.length > 0) {
        setUnansweredQuestions(unanswered.map(({ questionId }) => questionId));
        return;
      }
  
      
      let marks = 0;
      questionData.forEach(({ questionId, correctAnswer }) => {
        const selectedAnswer = selectedAnswers[questionId];
        if (selectedAnswer && selectedAnswer.isCorrect) {
          marks++;
        }
      });
  
      const totalQuestions = questionData.length;
      console.log("You Scored " + marks + " Out of " + totalQuestions);
  
      if (location.state && location.state.reviewMode) {
        navigate(`/result/${marks}/${totalQuestions}`, { state: { selectedAnswers, reviewMode: true } });
      } else {
        navigate(`/result/${marks}/${totalQuestions}`, { state: { selectedAnswers } });
      }
    };
  
    // function getColor(questionId, optionId, correctAnswer, reviewMode) {
    //   const selectedAnswer = selectedAnswers[questionId];
    //   console.log(selectedAnswer)
    //   if (selectedAnswer) {
    //     if (reviewMode && selectedAnswer) {
    //       if (optionId === selectedAnswer.optionId && selectedAnswer.optionId === correctAnswer) {
    //         return "success";
    //       } else if (optionId !== selectedAnswer.optionId) {
    //         return "default";
    //       } else if (optionId === correctAnswer) {
    //         return "success";
    //       }
    //     } else {
    //       return "default";
    //     }
    //   }
    
    //   return "default"; // Add a default color if no conditions are met
    // }

    function getColor(questionId, optionId, correctAnswer, reviewMode) {
      const selectedAnswer = selectedAnswers[questionId];
    
      if (selectedAnswer) {
        if (reviewMode) {
          if (optionId === selectedAnswer.optionId) {
            if(selectedAnswer.isCorrect ){
              return "success"
            }
            else if(optionId !==selectedAnswer.isCorrect){
              return "error"
            }
          }
           else if (optionId === correctAnswer) {
            return "success";
          } else if (optionId === selectedAnswer.optionId && selectedAnswer.optionId !== correctAnswer) {
            return "error";
          } else {
            return "default";
          }
        } else {
          return "default";
        }
      }
    
      return "default"; // Add a default color if no conditions are met
    }
    
    // useEffect(() => {
    //   let interval;
    //   if (timer > 0 && currentQuestionIndex < questionData.length) {
    //     interval = setInterval(() => {
    //       setTimer((prevTimer) => prevTimer - 1);
    //     }, 1000);
    //   } else if (timer === 0) {
    //     handleNext();
    //   }
  
    //   return () => clearInterval(interval);
    // }, [timer, currentQuestionIndex, questionData.length]);
    
    
    const handleQuestionButtonClick = (index) => {
      setCurrentQuestionIndex(index);
    };
   
    const QuestionList = ({ questionData, currentQuestionIndex, handleQuestionButtonClick, selectedAnswers, reviewMode, setSelectedAnswers }) => {
      
      return (
        <div className="questionList">
          {questionData.map((question, index) => {
            const isSelected = index === currentQuestionIndex;
            const selectedAnswer = selectedAnswers[question.questionId];
         console.log(selectedAnswer)
            let buttonStyle = {
              backgroundColor: '',
              color: '',
            };
    
            if (selectedAnswer && selectedAnswer.optionId && reviewMode) {
              buttonStyle.backgroundColor = selectedAnswer.isCorrect ? 'green' : 'red';
              buttonStyle.color = 'white';
            } else if (isSelected ) {
              buttonStyle.backgroundColor = 'yellow';
            }

            if(selectedAnswer && selectedAnswer.optionId && !reviewMode ){
              buttonStyle.backgroundColor = 'black';
            }
            if (isSelected){
              buttonStyle.backgroundColor = 'yellow';
            }
    
            return (
              <Button className="questionButton"
                key={question.questionId}
                variant="outlined"
                onClick={() => handleQuestionButtonClick(index)}
                style={buttonStyle}
              >
                Question {index + 1}
              </Button>
            );
          })}
        </div>
      );
    };
  
    return (
      <Container>
      <Container className="quizContainer">
        <Box className="contentWrapper">
        <QuestionList
         questionData={questionData}
         currentQuestionIndex={currentQuestionIndex}
         handleQuestionButtonClick={handleQuestionButtonClick}
         selectedAnswers={selectedAnswers}
         reviewMode={reviewMode}
        />
        <Box key={questionData[currentQuestionIndex].questionId} className="questionBox" style={{ color: unansweredQuestions.includes(questionData[currentQuestionIndex].questionId) ? 'red' : '' }}>
          <Typography variant="h5" className="questionText">
         Q {questionData[currentQuestionIndex].questionId}.  {questionData[currentQuestionIndex].question}
          </Typography>
          <RadioGroup
            value={selectedAnswers[questionData[currentQuestionIndex].questionId]?.optionId || ""}
            onChange={(e) => handleOptionChange(questionData[currentQuestionIndex].questionId, e.target.value, questionData[currentQuestionIndex].correctAnswer)}
            className="radioGroup"
          >
            {questionData[currentQuestionIndex].options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={<Radio color={getColor(questionData[currentQuestionIndex].questionId, option.id, questionData[currentQuestionIndex].correctAnswer, reviewMode)} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {reviewMode &&<Typography >Correct Answer = {questionData[currentQuestionIndex].correctAnswer}</Typography>}
        </Box>
        
        {unansweredQuestions.length > 0 && (
          <Typography variant="body1" className="unansweredQuestionsText">
            Please answer all questions before submitting.
          </Typography>
        )}
        </Box>
        </Container>
        <Container className="navContainer">
          <Box>
        <Button onClick={handlePrevious} variant="contained" className="navButton" disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        <Button   onClick={handleNext} variant="contained"  className="nextButton" disabled={currentQuestionIndex === questionData.length - 1}>
          Next
        </Button>
       {!reviewMode && <Button onClick={handleData} variant="contained" className="submitButton" disabled={currentQuestionIndex < questionData.length - 1}>
          Submit
        </Button>}
       {reviewMode && <Button onClick={handleData} variant="contained" className="submitButton">
          Exit 
        </Button>}
        </Box>
        </Container>
        {/* <Box className="timerContainer">
        <Typography variant="h6">Time Remaining: {timer} seconds</Typography>
      </Box> */}
        </Container>
    );
  }
  
  export default QuestionData;

  // if (timer > 0) {
  //   console.log("Exam completed in time!");
  // } else {
  //   console.log("Exam time exceeded!");
  // }
  
  // // Navigate to the Home screen
  // navigation.navigate("Home", { questionCount: questionData.length });
  