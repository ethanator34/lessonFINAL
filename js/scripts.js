document.addEventListener('DOMContentLoaded', function () {
    const pointsCells = document.querySelectorAll('.points');
    const totalPointsCell = document.getElementById('totalPoints');
    const editableCells = document.querySelectorAll('[contenteditable="true"]');

    function calculateTotalPoints() {
        let total = 0;
        pointsCells.forEach(cell => {
            const points = parseInt(cell.textContent.trim(), 10);
            total += isNaN(points) ? 0 : points;
        });
        totalPointsCell.textContent = total;
    }

    editableCells.forEach((cell, index) => {
        cell.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateTotalPoints();
                const nextCell = editableCells[index + 1];
                if (nextCell) {
                    nextCell.focus();
                }
            }
        });

        cell.addEventListener('input', calculateTotalPoints);
    });

    calculateTotalPoints();
});
