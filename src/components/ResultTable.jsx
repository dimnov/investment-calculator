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
            <td>{res.savingsEndOfYear}</td>
            <td>{res.yearlyInterest}</td>
            <td>{res.yearlyContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
