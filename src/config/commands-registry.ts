import Registry from "@core/commands/contracts/registry";

import ToggleCutterMode from "@services/cutter/commands/toggle-cutter-mode";
import CutSelectedContent from "@services/cutter/commands/cut-selected-content";

/**
 * Commands registry.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
const COMMANDS_REGISTRY: Registry = {
    [ToggleCutterMode.COMMAND_NAME]: new ToggleCutterMode(),
    [CutSelectedContent.COMMAND_NAME]: new CutSelectedContent()
};

export default COMMANDS_REGISTRY;
