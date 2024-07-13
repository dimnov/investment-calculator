import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput.currentSavings;
    const initialInvestment = userInput.currentSavings;
    const yearlyContribution = userInput.yearlyContribution;
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        initialInvestment,
        yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculateHandler={calculateHandler} />
      {!userInput ? <p>No data.</p> : <ResultTable result={yearlyData} />}
    </div>
  );
}

export default App;
