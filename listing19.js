'use strict'

function sleep (sleepDuration) {
  const now = new Date().getTime()
  while (new Date().getTime() < now + sleepDuration) {}
}

console.log('Start')

sleep(10000)

console.log('Done, enter function')

for (let i = 0; i < 10; i++) {
  console.log(i)
}
