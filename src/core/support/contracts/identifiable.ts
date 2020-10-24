/**
 * Cutter identifiable interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core/Support
 */
interface Identifiable {
    /**
     * Get id of object.
     *
     * @return {string}
     */
    getId(): string;
}

export default Identifiable;
