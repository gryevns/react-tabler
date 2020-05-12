# retabler

ReactJS component library built with [tabler.io](https://tabler.io/).

## Install

```
npm install retabler
```

## Usage

Check out [the storybook](https://gryevns.github.io/react-tabler/) for examples of components.

Examples use [react-feather](https://github.com/feathericons/react-feather) icons but you can choose to install your favourite icon set.

```
import "retabler/dist/css/tabler.css";
import { Card } from "retabler";

const Example = () => (
    <Card>
        <Card.Body>example</Card.Body>
    </Card>
);
```

## Local Development

```
git clone git@github.com:gryevns/react-tabler.git
cd react-tabler
yarn install --dev

# tests
yarn run tests

# storybook
yarn run storybook

# build
yarn run build
```
