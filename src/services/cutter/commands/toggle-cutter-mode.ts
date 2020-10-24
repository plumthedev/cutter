import AbstractCommand from "@core/commands/abstract-command";

import CutterEvents from "./../events";

/**
 * Toggle cutting mode command.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
class ToggleCutterMode extends AbstractCommand {
    /**
     * Command name.
     *
     * @ver {string}
     */
    public static COMMAND_NAME: string = 'TOGGLE_CUTTER_MODE';

    /**
     * Handle command.
     *
     * @return {Promise<void>}
     */
    public async handle(): Promise<void> {
        const activeTabId = await this.findActiveTabId();

        this.eventBus.emit(activeTabId, {
            name: CutterEvents.TOGGLE_CUTTING_MODE
        });
    }
}

export default ToggleCutterMode;
