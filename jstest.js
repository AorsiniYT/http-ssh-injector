const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function repeatedGreetingsLoop() {
  for (let i = 1; i <= 5; i++) {
    await sleepNow(1000)
    console.log(`Hello #${i}`)
  }
}

repeatedGreetingsLoop()