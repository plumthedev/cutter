/**
 * Event payload.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
interface EventData {
    /**
     * Event indexer.
     *
     */
    [key: string]: string | number | boolean | object
}

export default EventData;
