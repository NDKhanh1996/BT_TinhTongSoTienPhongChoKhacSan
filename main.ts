let matrix = [
    [0, 1, 1, 2],
    [1, 5, 1, 0],
    [2, 0, 3, 3]
]

function matrixElementsSum(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && matrix[i + 1]){
                    matrix[i+1][j] = 0;
            }
            sum += matrix[i][j];
        }
    }
    return sum;
}

console.log(matrixElementsSum(matrix))