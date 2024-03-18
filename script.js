document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let winner = null;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && !winner) {
                cell.textContent = currentPlayer;
                winner = checkWin();
                if (winner) {
                    document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
                } else if ([...cells].every(cell => cell.textContent !== '')) {
                    document.getElementById('status').textContent = `It's a draw!`;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
                }
            }
        });
    });

    function checkWin() {
        const lines = [
            ['00', '01', '02'],
            ['10', '11', '12'],
            ['20', '21', '22'],
            ['00', '10', '20'],
            ['01', '11', '21'],
            ['02', '12', '22'],
            ['00', '11', '22'],
            ['02', '11', '20']
        ];

        for (const line of lines) {
            const [a, b, c] = line;
            if (document.getElementById(`cell${a}`).textContent !== '' &&
                document.getElementById(`cell${a}`).textContent === document.getElementById(`cell${b}`).textContent &&
                document.getElementById(`cell${a}`).textContent === document.getElementById(`cell${c}`).textContent) {
                return document.getElementById(`cell${a}`).textContent;
            }
        }

        return null;
    }
});
