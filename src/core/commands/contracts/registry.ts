import Command from "./command";

/**
 * Command registry interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
interface Registry {
    /**
     * Command indexer by name string.
     *
     * @return {Command}
     */
    [name: string]: Command
}

export default Registry;
