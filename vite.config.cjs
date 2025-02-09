"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_tsconfig_paths_1 = __importDefault(require("vite-tsconfig-paths"));
const path_1 = __importDefault(require("path"));
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)(), (0, vite_tsconfig_paths_1.default)()],
    resolve: {
        alias: [
            { find: '@', replacement: path_1.default.resolve(__dirname, 'src') },
            { find: '@pages', replacement: path_1.default.resolve(__dirname, 'src/pages') },
            {
                find: '@components',
                replacement: path_1.default.resolve(__dirname, 'src/components'),
            },
            { find: '@styles', replacement: path_1.default.resolve(__dirname, 'src/styles') },
            { find: '@data', replacement: path_1.default.resolve(__dirname, 'src/data') },
            { find: '@types', replacement: path_1.default.resolve(__dirname, 'src/types') },
            { find: '@hooks', replacement: path_1.default.resolve(__dirname, 'src/hooks') },
        ],
    },
});
