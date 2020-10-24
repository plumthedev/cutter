import Payload from "./payload";

/**
 * Event bus interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
interface Bus {
    /**
     * Emit event to runtime via tab.
     *
     * @param tabId {number}
     * @param payload {Payload}
     */
    emit(tabId: number, payload: Payload): void;

    /**
     * Listen to event in bus.
     *
     * @param event {string}
     * @param callback
     */
    on(event: string, callback: (payload: Payload) => void): void;
}

export default Bus;
