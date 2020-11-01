import commandsRepository from '@core/commands/repository';
import ToggleCutterMode from "../../../src/services/cutter/commands/toggle-cutter-mode";
import AbstractCommand from "../../../src/core/commands/abstract-command";

test('commands repository throws error on not existing command', () => {
    expect(() => {
        commandsRepository.findByName('not-existing-command')
    }).toThrowError()
});

test('commands repository returns instance of command which extends abstract command', () => {
    expect(
        commandsRepository.findByName(ToggleCutterMode.COMMAND_NAME)
    ).toBeInstanceOf(AbstractCommand)
});
