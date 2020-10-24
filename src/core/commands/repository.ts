import COMMANDS_REGISTRY from "@config/commands-registry";

import AbstractCommand from "./abstract-command";
import Command from "./contracts/command";
import CommandNotFoundError from "./errors/command-not-found-error";
import InvalidCommandError from "./errors/invalid-command-error";
import Registry from "./contracts/registry";
import RepositoryContract from "./contracts/repository";

/**
 * Commands repository.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter/Core
 */
class Repository implements RepositoryContract {
    /**
     * Commands registry.
     *
     * @var {Registry}
     */
    protected registry: Registry = COMMANDS_REGISTRY;

    /**
     * Find command by name.
     *
     * @param name {string}
     *
     * @return {Command}
     */
    public findByName(name: string): Command {
        if (!this.registry.hasOwnProperty(name)) {
            throw new CommandNotFoundError(
                `Command with name [${name}] not found in registry.`
            );
        }

        const command = this.registry[name];

        if (!(command instanceof AbstractCommand)) {
            throw new InvalidCommandError(
                `Command [${name}] is invalid.`
            );
        }

        return command;
    }
}


export default new Repository();
