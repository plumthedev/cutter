module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    "roots": [
        "tests"
    ],
    moduleNameMapper: {
        '^@config/(.*)$': '<rootDir>/src/config/$1',
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@tests/(.*)$': '<rootDir>/tests/$1',
    }
};
