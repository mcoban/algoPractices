function solution(A) {
    var n = A.length + 1;
    var expectedSum = (n * (n + 1) / 2);
    var realSum = 0;
    for (var i = 0; i < A.length; i++) {
        realSum += A[i];
    }
    return expectedSum - realSum;
}
