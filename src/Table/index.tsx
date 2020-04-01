import React from "react";
import cn from "classnames";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCol from "./TableCol";
import TableColHeader from "./TableColHeader";

export interface TableProps {
    className?: string;
    children: React.ReactNode;
    cards?: boolean;
    striped?: boolean;
    responsive?: boolean;
    highlightRowOnHover?: boolean;
    hasOutline?: boolean;
    verticalAlign?: "center";
}

function Table({
    className,
    children,
    cards,
    striped,
    responsive,
    highlightRowOnHover,
    hasOutline,
    verticalAlign,
    ...props
}: TableProps) {
    const classes = cn(
        "table",
        {
            "card-table": cards,
            "table-striped": striped,
            "table-hover": highlightRowOnHover,
            "table-outline": hasOutline,
            "table-vcenter": verticalAlign === "center",
        },
        className,
    );

    const table = (
        <table className={classes} {...props}>
            {children}
        </table>
    );

    return !responsive ? table : <div className="table-responsive">{table}</div>;
}

Table.defaultProps = {
    cards: false,
    striped: false,
    responsive: false,
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Col = TableCol;
Table.ColHeader = TableColHeader;

export default Table;
