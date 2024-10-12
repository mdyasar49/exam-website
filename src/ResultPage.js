import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function ResultPage() {
  const { marks, totalQuestions } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
console.log(state)
  const handleRetry = () => {
    navigate("/QuestionData");
  };
  console.log(state);

  const reviewQuestions = () => (
    <Button
      variant="contained"
      onClick={() =>
        navigate("/QuestionData", {
          state: { selectedAnswers: state?.selectedAnswers || {}, reviewMode: true },
        })
      }
    >
      Review
    </Button>
  );

  return(
    <Container>
      <div>
        <h1>Your Result</h1>
        <p>You scored {marks} out of {totalQuestions}</p>
      </div>
      {marks >= 3 ? (
        <Typography variant="h5">Congratulations</Typography>
      ) : (
        <>
          <Typography variant="h5">Better Luck Next Time</Typography>
          <Button variant="contained" onClick={handleRetry}>
            Retry
          </Button>
        </>
      )}
      
      {reviewQuestions()}
    </Container>
  );
}

export default ResultPage;
