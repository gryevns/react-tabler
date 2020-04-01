import React from "react";
import cn from "classnames";

export interface TimelineTitleProps {
    children: React.ReactNode;
}

const TimelineTitle = ({ children }: TimelineTitleProps) => (
    <p className="list-timeline-title">{children}</p>
);

export interface TimelineContentProps {
    children?: React.ReactNode;
}

const TimelineContent = ({ children }: TimelineContentProps) => (
    <div className="list-timeline-content">{children}</div>
);

export interface TimelineTimeProps {
    children?: React.ReactNode;
}

const TimelineTime = ({ children }: TimelineTimeProps) => (
    <div className="list-timeline-time">{children}</div>
);

export interface TimelineIconProps {
    children: React.ReactNode;
    className?: string;
}

const TimelineIcon = ({ className, children }: TimelineIconProps) => {
    const classes = cn("list-timeline-icon", className);
    return <div className={classes}>{children}</div>;
};

export interface TimelineItemProps {
    children: React.ReactNode;
}

const TimelineItem = ({ children }: TimelineItemProps) => <li>{children}</li>;

export interface TimelineProps {
    children: React.ReactNode;
    className?: string;
    simple?: boolean;
}

const Timeline = ({ children, className, simple = false }: TimelineProps) => {
    const classes = cn(
        "list list-timeline",
        { "list-timeline-simple": simple },
        className,
    );
    return <ul className={classes}>{children}</ul>;
};

Timeline.Item = TimelineItem;
Timeline.Icon = TimelineIcon;
Timeline.Time = TimelineTime;
Timeline.Title = TimelineTitle;
Timeline.Content = TimelineContent;

export default Timeline;
