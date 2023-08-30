function executeCommands(initialPosition, initialDirection, commands) {
    let position = [...initialPosition];
    let direction = initialDirection;

    let prv;
    for (const command of commands) {
        if (command === 'f') {
            if (direction === 'N') position[1]++; 
            else if (direction === 'S') position[1]--; 
            else if (direction === 'E') position[0]++; 
            else if (direction === 'W') position[0]--; 
        } else if (command === 'b') {
            if (direction === 'N') position[1]--; 
            else if (direction === 'S') position[1]++;
            else if (direction === 'E') position[0]--; 
            else if (direction === 'W') position[0]++;
            else if (direction === 'Up') position[2]--;
        } else if (command === 'r') {
            if (direction === 'N') direction = 'E';
            else if (direction === 'E') direction = 'S';
            else if (direction === 'S') direction = 'W';
            else if (direction === 'W') direction = 'N';
            
        } else if (command === 'l') {
            if(direction === "Up" )  direction="N";
            else if (direction === 'N') direction = 'W';
            else if (direction === 'W') direction = 'S';
            else if (direction === 'S') direction = 'E';
            else if (direction === 'E') direction = 'N';
        
        } else if (command === 'u') {
            if (direction === 'N') direction = 'Up';
            else if (direction === 'E') direction = 'Up';
            else if (direction === 'Up') direction = 'S';
            else if (direction === 'S') direction = 'Down';
            else if (direction === 'Down') direction = 'N';
            prv=command;
            // position[2]++;  //z index not changed
        } else if (command === 'd') {
            if (direction === 'N') direction = 'Down';
            else if (direction === 'Down') direction = 'S';
            else if (direction === 'S') direction = 'Up';
            else if (direction === 'Up') direction = 'N';
            prv=command;
            // position[2]--;  
        }
    }
    console.log(position)
    return {
        finalPosition: position,
        finalDirection: direction
    };
}

module.exports = executeCommands;
