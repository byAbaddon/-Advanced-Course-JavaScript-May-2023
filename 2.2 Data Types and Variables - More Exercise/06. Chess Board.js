function chessBoard(num) {
  console.log(`<div class="chessboard">`);

  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      console.log('  <div>');

      for (let j = 0; j < num; j++) {
        console.log(j % 2 == 0 ? '    <span class="black"></span>' : '    <span class="white"></span>');
      }
      console.log('  </div>');
    } else {
      console.log('  <div>');

      for (let k = 0; k < num; k++) {
        console.log(k % 2 == 0 ? '    <span class="white"></span>' : '    <span class="black"></span>');
      }
      console.log('  </div>');
    }
  }
  console.log(`</div>`);
}

// chessBoard(3)