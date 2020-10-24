/**
 * Command interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 * @link https://developer.chrome.com/extensions/commands
 */
interface Command {
    /**
     * Handle command.
     *
     * @return string
     */
    handle(): void;
}

export default Command;
