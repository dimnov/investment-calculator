const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultTable({ result }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((res) => (
          <tr key={res.year}>
            <td>{res.year}</td>
            <td>{formatter.format(res.savingsEndOfYear)}</td>
            <td>{formatter.format(res.yearlyInterest)}</td>
            <td>
              {formatter.format(
                res.savingsEndOfYear - res.initialInvestment - res.yearlyContribution * res.year
              )}
            </td>
            <td>{formatter.format(res.initialInvestment + res.yearlyContribution * res.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
