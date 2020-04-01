import React from "react";
import cn from "classnames";

export interface CarouselItemProps {
    active?: boolean;
    children?: React.ReactNode;
    src: string;
    style?: React.CSSProperties;
}

const CarouselItem = ({ active, children, src, style }: CarouselItemProps) => {
    const classes = cn("carousel-item", { active });
    return (
        <div className={classes}>
            <img
                className="d-block w-100"
                src={src}
                data-holder-rendered="true"
                style={style}
            />
            <div className="carousel-caption">{children}</div>
        </div>
    );
};

export interface CarouselProps {
    children: React.ReactNode[];
    interval?: number;
    slide?: boolean;
    controls?: boolean;
    indicators?: boolean;
}

const Carousel = ({
    children,
    interval = 5000,
    slide = true,
    controls = true,
    indicators = true,
}: CarouselProps) => {
    const [current, setCurrent] = React.useState(0);
    const slides = children.length;
    const previous = current === 0 ? slides - 1 : current - 1;
    const next = current === slides - 1 ? 0 : current + 1;
    const indicatorChildren = Array.from(Array(slides).keys()).map(i => {
        const props = {
            className: current === i ? "active" : "",
            onClick: () => setCurrent(i),
        };
        return <li key={`indicator-${i}`} {...props} />;
    });
    if (slide) {
        React.useEffect(() => {
            const slideDelay = setInterval(() => setCurrent(next), interval);
            return () => {
                clearTimeout(slideDelay);
            };
        });
    }
    const onNext = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent(next);
    };
    const onPrevious = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent(previous);
    };
    return (
        <div className="carousel slide" data-ride="carousel">
            {indicators && (
                <ol className="carousel-indicators">{indicatorChildren}</ol>
            )}
            <div className="carousel-inner">
                {children.map((child, i) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        active: i === current,
                    }),
                )}
            </div>
            {controls && (
                <>
                    <a
                        className="carousel-control-prev"
                        role="button"
                        href="#"
                        onClick={onPrevious}
                    >
                        <span
                            aria-hidden="true"
                            className="carousel-control-prev-icon"
                        ></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        role="button"
                        href="#"
                        onClick={onNext}
                    >
                        <span
                            aria-hidden="true"
                            className="carousel-control-next-icon"
                        ></span>
                        <span className="sr-only">Next</span>
                    </a>
                </>
            )}
        </div>
    );
};

Carousel.Item = CarouselItem;

export default Carousel;
