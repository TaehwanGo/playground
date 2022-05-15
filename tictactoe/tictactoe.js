/**
 * board : 게임 판
 * turn : 현재 턴
 * winner : 승자
 */

class Tictactoe {
  constructor() {
    this.clickCount = 0;
  }

  // 게임 판 초기화
  resetBoard() {
    const cells = this.board.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    this.clickCount = 0;
  }

  // 점수 초기화
  resetScore() {
    document.getElementById("player1Score").textContent = 0;
    document.getElementById("player2Score").textContent = 0;
  }

  // 플레이어 초기화
  initPlayer() {
    this.player = {
      player1: {
        name: "player1",
        type: "X",
        score: 0,
      },
      player2: {
        name: "player2",
        type: "O",
        score: 0,
      },
    };
  }

  // 게임 초기화
  init() {
    this.board = document.querySelector("#board");
    this.turn = "X";
    this.winner = null; // x, o, null
    this.clickCount = 0;
  }

  // 재시작
  restart() {
    this.init();
    this.initPlayer();
    this.resetBoard();
    this.resetScore();
  }

  // 게임 이벤트 초기화
  initEvent() {
    const board = this.board;
    board.addEventListener("click", (e) => {
      if (e.target.closest(".cell")) {
        this.clickCell(e.target);
      }
    });
  }

  // 게임 승리 체크
  checkWinner() {
    const cells = this.board.querySelectorAll(".cell");

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        cells[a].textContent === "" ||
        cells[b].textContent === "" ||
        cells[c].textContent === ""
      ) {
        continue;
      }
      if (
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
      ) {
        this.winner =
          cells[a].textContent === this.player.player1.type
            ? "player1"
            : "player2";
        return true;
      }
    }
    return false;
  }

  // 게임 종료 체크
  checkFinish() {
    if (this.clickCount === 9) {
      this.winner = "";
      this.draw();
      return;
    }

    if (this.checkWinner()) {
      this.win();
      return;
    }
  }

  // 클릭한 셀 선택
  clickCell(cell) {
    if (cell.textContent === "") {
      cell.textContent = this.turn;
      this.clickCount++;
      this.checkFinish();
      this.changeTurn();
    }
  }

  // 게임 턴 전환
  changeTurn() {
    this.turn = this.turn === "X" ? "O" : "X";
  }

  // 게임 승리
  win() {
    console.log("winner", this.winner);
    const winnerScoreElement = document.querySelector(`#${this.winner}Score`);
    winnerScoreElement.innerHTML = ++this.player[this.winner].score;
    setTimeout(() => {
      alert(`${this.winner} win!`);
      this.resetBoard();
    }, 0);
  }

  // 게임 무승부
  draw() {
    console.log("draw", this.winner);
    setTimeout(() => {
      alert("draw");
      this.resetBoard();
    }, 0);
  }

  // 게임 시작
  start() {
    this.init();
    this.initPlayer();
    this.initEvent();
  }
}

const tictactoe = new Tictactoe();

tictactoe.start();

const restartBtn = document.querySelector("#restartBtn");

restartBtn.addEventListener("click", () => {
  console.log("game restart");
  tictactoe.restart();
});
