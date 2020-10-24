import commandsRepository from './repository';

/**
 * Chrome commands handler.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 * @link https://developer.chrome.com/extensions/commands
 */
chrome.commands.onCommand.addListener((commandName: string) => {
    const command = commandsRepository.findByName(commandName);
    command.handle();
});
