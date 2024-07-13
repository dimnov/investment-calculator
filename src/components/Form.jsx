import { useState } from "react";

function Form({ onCalculateHandler }) {
  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      userInput.currentSavings &&
      userInput.yearlyContribution &&
      userInput.expectedReturn &&
      userInput.duration
    ) {
      onCalculateHandler(userInput);
      reset();
    }
  }

  function reset() {
    setUserInput({
      currentSavings: "",
      yearlyContribution: "",
      expectedReturn: "",
      duration: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                currentSavings: Number(e.target.value),
              })
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                yearlyContribution: Number(e.target.value),
              })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                expectedReturn: Number(e.target.value),
              })
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                duration: Number(e.target.value),
              })
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={reset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
