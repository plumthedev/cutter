import Tab = chrome.tabs.Tab;
import QueryInfo = chrome.tabs.QueryInfo;

import RepositoryContract from './contracts/repository';

/**
 * Tabs repository.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
class Repository implements RepositoryContract {
    /**
     * Get all tabs.
     *
     * @param query {chrome.tabs.QueryInfo}
     *
     * @return {Promise<chrome.tabs.Tab[]>}
     */
    public find(query: QueryInfo): Promise<Tab[]> {
        return new Promise((resolve) => {
            chrome.tabs.query(query, (tabs) => {
                resolve(tabs);
            })
        })
    }

    /**
     * Get active tab.
     *
     * @return {Promise<chrome.tabs.Tab[]>}
     */
    public findActive(): Promise<Tab> {
        return new Promise((resolve, reject) => {
            this.find({active: true, currentWindow: true})
                .then((tabs: Tab[]) => {
                    if (tabs.length) {
                        resolve(tabs[0]);
                    }

                    reject(`Can not find active tab.`)
                })
        })
    }
}

export default new Repository();
