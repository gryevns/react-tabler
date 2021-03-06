export type Color =
    | "blue"
    | "azure"
    | "indigo"
    | "purple"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "green"
    | "teal"
    | "cyan"
    | "gray";

export const colors = [
    "blue" as const,
    "azure" as const,
    "indigo" as const,
    "purple" as const,
    "pink" as const,
    "red" as const,
    "orange" as const,
    "yellow" as const,
    "lime" as const,
    "green" as const,
    "teal" as const,
    "cyan" as const,
    "gray" as const,
];

export const colorOptions = colors.reduce((result, color: string) => {
    result[color] = color;
    return result;
}, {});

export type Variant =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";

export const variants = [
    "primary" as const,
    "secondary" as const,
    "success" as const,
    "info" as const,
    "warning" as const,
    "danger" as const,
];
