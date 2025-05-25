import assert from 'node:assert';
import { getElem, getAllElems, appendChild } from './html.js'
import { createHeader, createFooter, toSection } from './header-footer.js';

(window as any).toSection = toSection;
/**
 * Set up the page.
 */
async function main(): Promise<void> {

    createHeader(); createFooter();

}

void main();