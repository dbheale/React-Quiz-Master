const StatisticSummary = (args:{statistic: { 
  [statistic: string]: {
      total: number;
      correct: number;
      label: string;
  };
}, type:string}) => {
  
  return (
    <div>
      <h3>Questions by {args.type}</h3>
      <ul>
        {Object.keys(args.statistic).map((key) => (
          <li key={key}>
            <strong>{args.statistic[key].label}:</strong> {args.statistic[key].total} total, {args.statistic[key].correct} correct
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticSummary;
