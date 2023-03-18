const getAverage = (n1, n2, n3, n4, n5) => {
    return (n1 + n2+ n3+ n4+ n5) / 5;
}

const getAverageV2 = (...n) => {
    let sumNotes = 0;
    n.forEach((grade) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}