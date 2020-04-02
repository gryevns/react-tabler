import { configure } from "@storybook/react";
import "../src/static/css/demo.css";
import "../src/static/css/tabler.css";
import "../src/static/css/tabler-buttons.css";
import "../src/static/css/tabler-flags.css";
import "../src/static/css/tabler-payments.css";

// automatically import all files ending in *.stories.js
configure([require.context("../src", true, /\.stories\.(js|tsx)$/)], module);
