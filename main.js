function executeCommands (initialPosition, initialDirection, commands) {
  let position = [...initialPosition]
  let direction = initialDirection

  let prv='N'
  for (const command of commands) {
    if (command === 'f') {
      if (direction === 'N') position[1]++
      else if (direction === 'S') position[1]--
      else if (direction === 'E') position[0]++
      else if (direction === 'W') position[0]--
      else if (direction === 'Up') position[2]++
      else if (direction === 'Down') position[2]--
    } else if (command === 'b') {
      if (direction === 'N') position[1]--
      else if (direction === 'S') position[1]++
      else if (direction === 'E') position[0]--
      else if (direction === 'W') position[0]++
      else if (direction === 'Up') position[2]--
      else if (direction === 'Down') position[2]
    } else if (command === 'r') {
      if (direction === 'N') {
        direction = 'E'
        prv = 'E'
      } else if (direction === 'E') {
        direction = 'S'
        prv = 'S'
      } else if (direction === 'S') {
        direction = 'W'
        prv = 'W'
      } else if (direction === 'W') {
        direction = 'N'
        prv = 'W'
      }

      if (direction === 'Up' || direction === 'Down') {
        if (prv === 'N') {
          direction = 'E'
          prv = 'E'
        } else if (prv === 'E') {
          direction = 'S'
          prv = 'S'
        } else if (prv === 'S') {
          direction = 'W'
          prv = 'W'
        } else if (prv === 'W') {
          direction = 'N'
          prv = 'N'
        }
      }


    } else if (command === 'l') {
      if (direction === 'N') {
        direction = 'W'
        prv = 'W'
      } else if (direction === 'E') {
        direction = 'N'
        prv = 'N'
      } else if (direction === 'S') {
        direction = 'E'
        prv = 'E'
      } else if (direction === 'W') {
        direction = 'S'
        prv = 'S'
      }

      if (direction === 'Up' || direction === 'Down') {
        if (prv === 'N') {
          direction = 'W'
          prv = 'W'
        } else if (prv === 'E') {
          direction = 'N'
          prv = 'N'
        } else if (prv === 'S') {
          direction = 'E'
          prv = 'E'
        } else if (prv === 'W') {
          direction = 'S'
          prv = 'S'
        }
      }
    } else if (command === 'u') {
      direction = "Up"
      // position[2]++;  //z index not changed
    } else if (command === 'd') {
      direction = "Down";
    //   prv = command
      // position[2]--;
    }
  }
  console.log(position)
  return {
    finalPosition: position,
    finalDirection: direction
  }
}

module.exports = executeCommands
