const BridgeMap = require('../src/BridgeMap');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers
    .reduce((acc, input) => acc
      .mockImplementationOnce((question, callback) => {
        callback(input);
      }), MissionUtils.Console.readLine);
};

describe('다리 건너기 테스트', () => {
  test('다리 건너기 기록 체크', () => {
    const pattern = ['U', 'D', 'D'];
    const input = ['U', 'D', 'U'];
    const historyList = [
      new Map([['U', ['O']], ['D', [' ']]]),
      new Map([['U', ['O', ' ']], ['D', [' ', 'O']]]),
      new Map([['U', ['O', ' ', 'X']], ['D', [' ', 'O', ' ']]]),
    ];
    const bridgeMap = new BridgeMap();
    bridgeMap.setPattern(pattern);
    input.forEach((path, index) => {
      expect(bridgeMap
        .setHistoryWithChooseStep(path).getHistory())
        .toEqual(historyList[index]);
      bridgeMap.incrementDistance();
    });
  });
});
