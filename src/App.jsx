import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";

function App() {
  const yearlyData = [];

  const calculateHandler = (userInput) => {
    let currentSavings = userInput.currentSavings;
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
        yearlyContribution,
      });
    }
  };

  return (
    <div>
      <Header />
      <Form onCalculateHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultTable result={yearlyData} />
    </div>
  );
}

export default App;
