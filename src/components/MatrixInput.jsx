import { useState } from "react";

const MatrixInput = ({ label, rows, cols, onChange }) => {
  const [matrix, setMatrix] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(0))
  );

  const handleChange = (r, c, value) => {
    const newMatrix = [...matrix];
    newMatrix[r][c] = Number(value);
    setMatrix(newMatrix);
    onChange(newMatrix);
  };

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="text-lg font-semibold">{label}</h2>
      {matrix.map((row, rIndex) => (
        <div key={rIndex} className="flex space-x-2 mt-2">
          {row.map((_, cIndex) => (
            <input
              key={cIndex}
              type="number"
              className="w-14 p-1 border rounded text-center"
              onChange={(e) => handleChange(rIndex, cIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixInput;
