import AbstractCommand from "@core/commands/abstract-command";

import CutterEvents from "./../events";

/**
 * Cut selected content command.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
class CutSelectedContent extends AbstractCommand {
    /**
     * Command name.
     *
     * @ver {string}
     */
    public static COMMAND_NAME: string = 'CUT_SELECTED_CONTENT';

    /**
     * Handle command.
     *
     * @return {Promise<void>}
     */
    public async handle(): Promise<void> {
        const activeTabId = await this.findActiveTabId();

        this.eventBus.emit(activeTabId, {
            name: CutterEvents.CUT_SELECTED_CONTENT
        });
    }
}

export default CutSelectedContent;
