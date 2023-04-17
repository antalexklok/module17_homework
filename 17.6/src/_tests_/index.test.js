const reverseString = require('./index.js');

test(
  'проверяем реверс строки',
  () => {
    expect(reverseString('hello www')).toBe('www olleh');
  }
);
describe(
  "моя проверка",
  () => {
    const testCases = [
      {
        inString: 'hello',
        expected: 'olleh'
      }
    ];
    testCases.forEach(test => {
      it(
        'Входящая строка : ${testString} ожидаю: ${test.expected}',
        () => {
          const res reverseString(test.inString);
          expect(res).toBe(test.expected);
        }
      );
    })
  });

