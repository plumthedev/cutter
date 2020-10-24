import NodeContract from "./node";

/**
 * Cutter service interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
interface Service {
    /**
     * Possible elements in document to select by cutter.
     *
     * @var {JQuery<any>}
     */
    elementsToSelect: JQuery<any>;

    /**
     * Cut nodes content and save it to clipboard.
     *
     * @return {void}
     */
    cut(): void;

    /**
     * Disable selection mode.
     *
     * @return {void}
     */
    disable(): void;

    /**
     * Enable selection mode.
     *
     * @return {void}
     */
    enable(): void;

    /**
     * Get nodes list.
     *
     * @return {NodeContract}
     */
    getNodes(): NodeContract[];

    /**
     * Reset cutter state and data.
     *
     * @return {void}
     */
    reset(): void;

    /**
     * Toggle cutter mode between enabled and disabled.
     *
     * @return {void}
     */
    toggleState(): void;
}

export default Service;
