let userInput: unknown;
let userName: string;
userInput = 5;
userName = 'John';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, code: code };
}

generateError('something went wrong', 500);
