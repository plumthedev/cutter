import EventData from './event-data';

/**
 * Event payload interface.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
interface Payload {
    /**
     * Event data.
     *
     * @var {EventData}
     */
    data?: EventData;

    /**
     * Event meta data.
     *
     * @var {EventData}
     */
    meta?: EventData;

    /**
     * Event name.
     *
     * @var {string}
     */
    name: string;
}

export default Payload;
