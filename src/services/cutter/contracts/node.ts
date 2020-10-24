import Identifiable from '@core/support/contracts/identifiable';

/**
 * Cutter node interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
interface Node extends Identifiable {
    /**
     * Backlight node.
     *
     * @return {void}
     */
    backlight(): void;

    /**
     * Get node content.
     *
     * @return {string}
     */
    getContent(): string;

    /**
     * Get node raw content.
     *
     * @return {string}
     */
    getRawContent(): string;

    /**
     * Take node work off.
     *
     * @return {void}
     */
    kill(): void;
}

export default Node;
