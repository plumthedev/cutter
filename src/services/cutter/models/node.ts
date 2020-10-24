import $ from 'jquery';
import md5 from 'md5';

import Contract from './../contracts/node';

/**
 * Cutter node.
 *
 * @author Kacper Pruszyński (plumthedev) <kacper.pruszynski99@gmail.com>
 * @package Cutter
 */
class Node implements Contract {
    /**
     * Properties to backlight.
     *
     * @var {any}
     */
    protected backlightProperties: any = {
        'background-color': 'rgba(51, 51, 51, 0.5)'
    };

    /**
     * Node element.
     *
     * @var {JQuery<any>}
     */
    protected element: JQuery<any>;

    /**
     * Create node instance.
     *
     * @param element {HTMLElement}
     */
    public constructor(element: HTMLElement) {
        this.element = $(element);
        this.boot();
    }

    /**
     * Backlight node.
     *
     * @return {void}
     */
    public backlight(): void {
        for (const property in this.backlightProperties) {
            if (this.backlightProperties.hasOwnProperty(property)) {
                this.element.css(property, this.backlightProperties[property])
            }
        }
    }

    /**
     * Get node content.
     *
     * @return {string}
     */
    public getContent(): string {
        let content = this.element.text();
        content = content.trim();
        content = content.replace(/(\r\n|\n|\r)/gm, ' ');

        return content;
    }

    /**
     * Get id of node.
     *
     * @return {string}
     */
    public getId(): string {
        return md5(this.getRawContent());
    }

    /**
     * Get node raw content.
     *
     * @return {string}
     */
    public getRawContent(): string {
        return this.element.html();
    }

    /**
     * Take node work off.
     *
     * @return {void}
     */
    public kill(): void {
        Object.keys(this.backlightProperties).forEach((property: string) => {
            this.element.css(property, '');
        })
    }

    /**
     * Boot this model to life.
     *
     * @return {void}
     */
    protected boot(): void {
        this.backlight();
    }
}

export default Node;
