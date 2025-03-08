const ResultDisplay = ({ result }) => {
    return (
      <div className="mt-4 p-4 border rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">Result Matrix:</h2>
        {result.length > 0 ? (
          result.map((row, i) => (
            <div key={i} className="flex space-x-2 mt-2">
              {row.map((val, j) => (
                <div key={j} className="w-14 p-2 border rounded text-center">
                  {val}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No result yet.</p>
        )}
      </div>
    );
  };
  
  export default ResultDisplay;
  