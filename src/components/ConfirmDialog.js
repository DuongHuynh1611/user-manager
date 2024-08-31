import React from 'react';

const ConfirmDialog =({isOpen, onConfirm, onCancel, message})=>{
    if(!isOpen) 
        return null;

    return(
        <div style={styles.overlay}>
            <div style={styles.dialog}>
                <p>{message}</p>
                <div style={styles.buttons}>
                    <button style={styles.button} onClick={onConfirm}>Yes</button>
                    <button style={styles.button} onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};
const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        zIndex: 9999, /* Background color with opacity */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
};


export default ConfirmDialog;