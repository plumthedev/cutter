import EventBusContract from "@core/runtime/contracts/bus";
import eventBus from "@core/runtime/event-bus";
import TabsRepositoryContract from "@core/tabs/contracts/repository";
import tabsRepository from "@core/tabs/repository";

import Command from "./contracts/command";


/**
 * Abstract command.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 * @link https://developer.chrome.com/extensions/commands
 */
abstract class AbstractCommand implements Command {
    /**
     * Runtime event bus.
     *
     * @var {EventBusContract}
     */
    protected eventBus: EventBusContract;

    /**
     * Chrome tabs repository.
     *
     * @var {TabsRepositoryContract}
     */
    protected tabsRepository: TabsRepositoryContract;

    /**
     * Create new command instance.
     */
    constructor() {
        this.eventBus = eventBus;
        this.tabsRepository = tabsRepository;
    }

    /**
     * Handle command.
     *
     * @return {void}
     */
    public abstract handle(): void

    /**
     * Find active tab id.
     * If can not be found, throw error.
     *
     * @return {Promise<number>}
     * @throws {Error}
     */
    protected async findActiveTabId(): Promise<number> {
        const activeTab = await this.tabsRepository.findActive();

        if (typeof activeTab.id !== 'number') {
            throw new Error('Cannot find active tab id.');
        }

        return activeTab.id;
    }
}

export default AbstractCommand;
