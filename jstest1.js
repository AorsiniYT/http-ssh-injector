const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function repeatedGreetingsLoop() {
  for (let i = 1; i <= 1; i++) {
    await sleepNow(3000)
    $("button.btn.btn-block.btn-primary").click();
  }
}

repeatedGreetingsLoop()