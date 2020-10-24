import eventBus from '@core/runtime/event-bus';

import CutterEvents from './events';
import cutterService from './service';

/**
 * Listen to toggle cutting mode event.
 * Handle it with toggling mode on cutter service.
 *
 * @return {void}
 */
eventBus.on(CutterEvents.TOGGLE_CUTTING_MODE, () => {
    cutterService.toggleState();
})

/**
 * Listen to cut selected content event.
 * Handle it with cut content.
 *
 * @return {void}
 */
eventBus.on(CutterEvents.CUT_SELECTED_CONTENT, () => {
    cutterService.cut();
})
