import React from "react";
import cn from "classnames";

interface ContextState {
    onHide: () => void;
}

const ModalContext = React.createContext({} as ContextState);

const ModalHeader = ({ children }) => {
    const { onHide } = React.useContext(ModalContext);
    return (
        <div className="modal-header">
            <div className="modal-title h4">{children}</div>
            <button type="button" className="close" onClick={onHide}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
            </button>
        </div>
    );
};

const ModalBody = ({ children }) => <div className="modal-body">{children}</div>;

const ModalFooter = ({ children }) => <div className="modal-footer">{children}</div>;

export interface ModalProps {
    show: boolean;
    blur?: boolean;
    onHide: () => any;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    scrollable?: boolean;
}

const Modal = ({
    show,
    blur = true,
    onHide,
    children,
    size,
    fullWidth,
    scrollable,
}: ModalProps) => {
    if (!show) {
        return null;
    }
    const classes = cn("modal", { "modal-blur": blur });
    const dialogClasses = cn("modal-dialog", {
        "modal-dialog-scrollable": scrollable,
        "modal-full-width": fullWidth,
        [`modal-${size}`]: !!size,
    });
    return (
        <ModalContext.Provider value={{ onHide }}>
            <div
                className={classes}
                role="dialog"
                aria-modal={true}
                style={{ display: "block" }}
            >
                <div className={dialogClasses} role="document">
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </ModalContext.Provider>
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
