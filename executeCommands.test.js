const executeCommands = require('./main'); // We'll create this module next


test('should execute commands and return final position and direction', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['f', 'r', 'u', 'b', 'l'];

    const result = executeCommands(initialPosition, initialDirection, commands);

    expect(result.finalPosition).toEqual([0, 1, -1]);
    expect(result.finalDirection).toBe('N');
});

test('should execute commands and return final position and direction', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['f'];

    const result = executeCommands(initialPosition, initialDirection, commands);

    expect(result.finalPosition).toEqual([0, 1, 0]);
    expect(result.finalDirection).toBe('N');
});

test('should execute commands and return final position and direction', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = [''];

    const result = executeCommands(initialPosition, initialDirection, commands);

    expect(result.finalPosition).toEqual([0, 0, 0]);
    expect(result.finalDirection).toBe('N');
});


test('should handle upward and downward rotations, changing Z-index', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands =["f","l","u","b","r"];

    const result = executeCommands(initialPosition, initialDirection, commands);

    expect(result.finalPosition).toEqual([0, 1, -1]);
    expect(result.finalDirection).toBe('N');
});


test('should handle upward and downward rotations, changing Z-index', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands =["f","r","u"];;

    const result = executeCommands(initialPosition, initialDirection, commands);

    expect(result.finalPosition).toEqual([0, 1, 0]);
    expect(result.finalDirection).toBe('Up');
});
// Add more test cases for different scenarios
