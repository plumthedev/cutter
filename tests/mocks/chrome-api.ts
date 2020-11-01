import chrome from 'sinon-chrome';

/**
 * Setup Chrome API mocks.
 *
 * @return void
 */
export const setupChromeApiMock = (): void => {
    // @ts-ignore
    global.chrome = chrome;
}

/**
 * Teardown Chrome API mocks.
 *
 * @return void
 */
export const teardownChromeApiMock = (): void => {
    delete global.chrome;
}

setupChromeApiMock();

afterAll(() => {
    teardownChromeApiMock();
})
