import React from "react";
import cn from "classnames";

import Buttons from "../Buttons";

interface ContextState {
    onHide: () => void;
}

const ToastContext = React.createContext({} as ContextState);

export interface ToastTitleProps {
    className?: string;
    children: React.ReactNode;
}

const ToastTitle = ({ className, children }: ToastTitleProps) => {
    const classes = cn(className, "mr-auto");
    return <strong className={classes}>{children}</strong>;
};

export interface ToastHeaderProps {
    children?: React.ReactNode;
}

const ToastHeader = ({ children }: ToastHeaderProps) => {
    const { onHide } = React.useContext(ToastContext);
    return (
        <div className="toast-header">
            {children}
            <Buttons.Button
                className="close ml-2 mb-1"
                data-dismiss="toast"
                onClick={() => onHide()}
            >
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
            </Buttons.Button>
        </div>
    );
};

export interface ToastBodyProps {
    children?: React.ReactNode;
}

const ToastBody = ({ children }: ToastBodyProps) => (
    <div className="toast-body">{children}</div>
);

export interface ToastProps {
    children: React.ReactNode;
    fade?: boolean;
    delay?: number;
}

const Toast = ({ children, fade, delay }: ToastProps) => {
    const [show, setShow] = React.useState(true);
    const classes = cn("toast", { fade, show });
    if (delay) {
        React.useEffect(() => {
            const hideDelay = setTimeout(() => setShow(false), delay);
            return () => {
                clearTimeout(hideDelay);
            };
        }, []);
    }
    if (!show) {
        return null;
    }
    return (
        <ToastContext.Provider value={{ onHide: () => setShow(false) }}>
            <div
                className={classes}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                {children}
            </div>
        </ToastContext.Provider>
    );
};

Toast.Header = ToastHeader;
Toast.Title = ToastTitle;
Toast.Body = ToastBody;

export default Toast;
