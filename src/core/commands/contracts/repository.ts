import Command from './command';

/**
 * Commands repository interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
interface Repository {
    /**
     * Find command by name.
     *
     * @return {Command}
     */
    findByName(name: string): Command
}

export default Repository;
