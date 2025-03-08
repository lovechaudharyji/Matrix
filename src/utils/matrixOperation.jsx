export const multiplyMatrices = (A, B) => {
    if (A[0].length !== B.length) return null; // Incompatible matrices
  
    let result = Array(A.length)
      .fill()
      .map(() => Array(B[0].length).fill(0));
  
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < B.length; k++) {
          result[i][j] += A[i][k] * B[k][j];
        }
      }
    }
    return result;
  };
  