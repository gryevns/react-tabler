import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import multi from "@rollup/plugin-multi-entry";
import copy from "rollup-plugin-copy";

const path = require("path");

import pkg from "./package.json";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],
    plugins: [
        external(),
        resolve({
            browser: true,
        }),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        commonjs({
            include: ["node_modules/**"],
            exclude: ["**/*.stories.tsx"],
            namedExports: {
                "node_modules/react/react.js": [
                    "Children",
                    "Component",
                    "PropTypes",
                    "createElement",
                ],
                "node_modules/react-dom/index.js": ["render"],
            },
        }),
        sass({
            insert: true,
        }),
        postcss({
            extract: path.resolve("dist/css/tabler.css"),
        }),
        copy({
            targets: [
                { src: "src/static/img/logo.svg", dest: "dist/img" },
                { src: "src/static/img/logo-small-white.svg", dest: "dist/img" },
                { src: "src/static/img/flags/*", dest: "dist/img/flags" },
                { src: "src/static/img/payments/*", dest: "dist/img/payments" },
            ],
        }),
        multi(),
    ],
};
