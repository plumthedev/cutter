import $ from 'jquery';

import Contract from './contracts/service';
import NodeContract from './contracts/node';
import NodeModel from './models/node';
import ClickEvent = JQuery.ClickEvent;

/**
 * Cutter service.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
class Service implements Contract {
    /**
     * Selected nodes array.
     *
     * @var any[]
     */
    protected selectedNodes: NodeContract[] = [];

    /**
     * Is cutter enabled flag.
     *
     * @var {boolean}
     */
    protected isEnabled: boolean = false;

    /**
     * Possible elements in document to select by cutter.
     *
     * @var {JQuery<any>}
     */
    public get elementsToSelect(): JQuery<any> {
        return $(document.body)
            .find('form[action*="/mod/quiz/review.php"]')
            .find('p')
    }

    /**
     * Cut nodes content and save it to clipboard.
     *
     * @return {void}
     */
    public cut(): void {
        let content = '';

        this.selectedNodes.forEach((node: NodeContract) => {
            content += `${node.getContent()}\n`;
        });

        navigator.clipboard.writeText(content).then(() => {
            this.reset();
        });
    }

    /**
     * Disable selection mode.
     *
     * @return {void}
     */
    public disable(): void {
        this.isEnabled = false;
        this.removeElementsEventsListeners();
        this.reset();
    }

    /**
     * Enable selection mode.
     *
     * @return {void}
     */
    public enable(): void {
        this.isEnabled = true;
        this.addElementsEventsListeners();
    }

    /**
     * Get nodes list.
     *
     * @return {NodeContract[]}
     */
    public getNodes(): NodeContract[] {
        return this.selectedNodes;
    }

    /**
     * Reset cutter state and data.
     *
     * @return {void}
     */
    public reset(): void {
        this.clearNodes();
        this.removeElementsEventsListeners();
        this.isEnabled = false;
    }

    /**
     * Toggle cutter mode between enabled and disabled.
     *
     * @return {void}
     */
    public toggleState(): void {
        if (this.isEnabled) {
            this.disable();
            return;
        }

        this.enable();
    }

    /**
     * Add element to list.
     * Avoid to add duplicates.
     *
     * @param element
     * @protected
     */
    protected addElementToNodeList(element: HTMLElement): boolean {
        const node = new NodeModel(element);
        const nodeInList = this.selectedNodes.find((searchNode: NodeContract) => {
            return searchNode.getId() === node.getId();
        })

        if (nodeInList) {
            return false;
        }

        this.selectedNodes.push(node);
        return true;
    }

    /**
     * Add elements events listeners.
     *
     * @return {void}
     */
    protected addElementsEventsListeners(): void {
        this.elementsToSelect.on('click', this.onElementClick.bind(this))
    }

    /**
     * Kill and clear lost of nodes.
     *
     * @return {void}
     */
    protected clearNodes(): void {
        this.selectedNodes.forEach((node: NodeContract) => {
            node.kill();
        });
        this.selectedNodes = [];
    }

    /**
     * On element click handler.
     *
     * @param evt {ClickEvent}
     *
     * @return {void}
     */
    protected onElementClick(evt: ClickEvent): void {
        const target = evt.currentTarget;

        if (!target) {
            throw new Error('Cannot find target element to create node.')
        }

        this.addElementToNodeList(target);
    }

    /**
     * Remove elements events listeners.
     *
     * @return {void}
     */
    protected removeElementsEventsListeners(): void {
        this.elementsToSelect.off('click');
    }
}

export default new Service();
