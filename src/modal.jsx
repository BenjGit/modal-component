import * as React from "react";

export const Modal = ({ isOpen, onClose, children, width, height, borderRadius, backgroundColor, padding }) => {
    // Styles pour la modal
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: isOpen ? 'block' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arrière-plan semi-transparent
        zIndex: 9999,
    };

    const contentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: backgroundColor || '#fff',
        padding: padding || '20px',
        borderRadius: borderRadius || '5px',
        width: width || 'auto', 
        height: height || 'auto',
    };

    return(
        <div style={modalStyle}>
            <div style={contentStyle}>
                {children}
                <div 
                    style={{ 
                        position: 'absolute',
                        top: '1px',
                        right: '7px',
                        cursor: 'pointer',
                        fontSize: '20px',
                    }} 
                    onClick={onClose}
                >
                    &times;
                </div>
            </div>
        </div>
    );
}