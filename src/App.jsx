import { useState } from "react";

const MatrixMultiplier = () => {
  // State for matrix sizes
  const [rowsA, setRowsA] = useState(2);
  const [colsA, setColsA] = useState(2);
  const [rowsB, setRowsB] = useState(2);
  const [colsB, setColsB] = useState(2);

  // State to store matrix values
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [result, setResult] = useState([]);

  // Function to handle input changes in matrices
  const handleMatrixChange = (matrix, setMatrix, row, col, value) => {
    const newMatrix = [...matrix];
    if (!newMatrix[row]) newMatrix[row] = []; // Ensure row exists
    newMatrix[row][col] = Number(value); // Convert input to number
    setMatrix(newMatrix); // Update state
  };

  // Function to multiply matrices
  const multiplyMatrices = () => {
    if (colsA !== rowsB) {
      alert("Number of columns in Matrix A must match rows in Matrix B");
      return;
    }

    // Initialize result matrix with zeros
    const resultMatrix = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
    
    // Perform matrix multiplication
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          resultMatrix[i][j] += (matrixA[i]?.[k] || 0) * (matrixB[k]?.[j] || 0);
        }
      }
    }
    
    setResult(resultMatrix); // Store result in state
  };

  return (
    <div className="h-200 bg-black rounded-b-4xl">
      <div className="p-5 max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
        
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 text-center text-yellow-600 animate-bounce">Matrix Multiplication Calculator</h1>
        
        {/* Input fields for matrix sizes */}
        <div className="flex gap-4 mb-4 justify-center">
          {/* Matrix A Size */}
          <div className="p-3 bg-white rounded-lg shadow hover:bg-blue-100 transition-all">
            <label className="block font-semibold">Matrix A Size</label>
            <input type="number" value={rowsA} onChange={(e) => setRowsA(Number(e.target.value))} className="border p-1 w-12 rounded" />
            x
            <input type="number" value={colsA} onChange={(e) => setColsA(Number(e.target.value))} className="border p-1 w-12 rounded" />
          </div>
          
          {/* Matrix B Size */}
          <div className="p-3 bg-white rounded-lg shadow hover:bg-blue-100 transition-all">
            <label className="block font-semibold">Matrix B Size</label>
            <input type="number" value={rowsB} onChange={(e) => setRowsB(Number(e.target.value))} className="border p-1 w-12 rounded" />
            x
            <input type="number" value={colsB} onChange={(e) => setColsB(Number(e.target.value))} className="border p-1 w-12 rounded" />
          </div>
        </div>

        {/* Matrix input fields */}
        <div className="grid grid-cols-2 gap-8">
          {[['A', matrixA, setMatrixA, rowsA, colsA], ['B', matrixB, setMatrixB, rowsB, colsB]].map(([label, matrix, setMatrix, rows, cols]) => (
            <div key={label} className="p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h2 className="font-semibold mb-2 text-center text-yellow-600">Matrix {label}</h2>
              {[...Array(rows)].map((_, row) => (
                <div key={row} className="flex gap-2 justify-center">
                  {[...Array(cols)].map((_, col) => (
                    <input
                      key={col}
                      type="number"
                      className="border p-2 w-12 text-center rounded hover:bg-gray-200 transition-all"
                      onChange={(e) => handleMatrixChange(matrix, setMatrix, row, col, e.target.value)}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Multiply button */}
        <button onClick={multiplyMatrices} className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 hover:scale-105 transition-all">Multiply</button>

        {/* Display result matrix */}
        {result.length > 0 && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h2 className="font-semibold text-center text-yellow-600">Result</h2>
            {result.map((row, i) => (
              <div key={i} className="flex gap-2 justify-center">
                {row.map((value, j) => (
                  <div key={j} className="border p-2 w-12 text-center rounded bg-gray-100 hover:bg-gray-200 transition-all">{value}</div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatrixMultiplier;