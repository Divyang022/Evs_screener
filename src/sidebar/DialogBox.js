// DialogBox.js
// import './DialogBox.css';

const DialogBox = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>{title}</h2>
        <div className="dialog-content">{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DialogBox;