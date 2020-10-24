import MessageSender = chrome.runtime.MessageSender;

import Bus from './contracts/bus';
import EventPayload from "./contracts/payload";
import EventData from "@core/runtime/contracts/event-data";

/**
 * Event bus.
 * Allows communication extension to browser.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
class EventBus implements Bus {
    /**
     * Emit event to runtime via tab.
     *
     * @param tabId {number}
     * @param data {Payload}
     *
     * @return {void}
     */
    public emit(tabId: number, data: EventPayload): void {
        chrome.tabs.sendMessage(tabId, data);
    }

    /**
     * Listen to event in bus.
     *
     * @param eventName {string}
     * @param callback
     *
     * @return {void}
     */
    public on(eventName: string, callback: (payload: EventPayload) => void): void {
        chrome.runtime.onMessage.addListener((event: EventPayload, sender: MessageSender) => {
            if (eventName === event.name) {
                callback(
                    this.composeEventResponsePayload(event, sender)
                );
            }
        });
    }

    /**
     * Compose event response payload.
     *
     * @param requestPayload {EventPayload}
     * @param sender {chrome.runtime.MessageSender}
     *
     * @return {EventPayload}
     */
    protected composeEventResponsePayload(requestPayload: EventPayload, sender: MessageSender): EventPayload {
        const data: EventData = requestPayload.data || {};
        const meta: EventData = requestPayload.meta || {};

        return {
            ...requestPayload,
            data: {
                ...data
            },
            meta: {
                ...meta,
                sender
            }
        }
    }
}

export default new EventBus();
