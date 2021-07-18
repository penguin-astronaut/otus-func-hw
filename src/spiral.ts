export function spiral<T>(array: T[][]): T[] {
  let matrix: T[][] = array;
  const result: T[] = [];
  function rotateMatrix(matrixOrigin: T[][]): T[][] {
    return matrixOrigin[0]
      .map((column, index) => matrixOrigin.map((row) => row[index]))
      .reverse();
  }

  while (true) {
    result.push(...matrix.shift());
    if (!matrix.length) {
      break;
    }
    matrix = rotateMatrix(matrix);
  }

  return result;
}
