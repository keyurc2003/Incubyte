const executeCommands = require('./main'); // We'll create this module next


test('should execute commands and return final position and direction', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['f', 'r', 'u', 'b', 'l'];

    const result = executeCommands(initialPosition, initialDirection, commands);

    expect(result.finalPosition).toEqual([0, 1, -1]);
    expect(result.finalDirection).toBe('N');
});

// Add more test cases for different scenarios
