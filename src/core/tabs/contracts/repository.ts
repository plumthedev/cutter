import Tab = chrome.tabs.Tab;
import QueryInfo = chrome.tabs.QueryInfo;

/**
 * Tabs repository interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
interface Repository {
    /**
     * Get all tabs.
     *
     * @param query {chrome.tabs.QueryInfo}
     *
     * @return {Promise<chrome.tabs.Tab[]>}
     */
    find(query: QueryInfo): Promise<Tab[]>;

    /**
     * Get active tab.
     *
     * @return {Promise<chrome.tabs.Tab[]>}
     */
    findActive(): Promise<Tab>;
}

export default Repository;
