const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    "roots": [
        "tests"
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths )
};
