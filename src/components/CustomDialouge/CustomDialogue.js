import React from "react";
import { Dialog } from "@mui/material";
import { commonStyle } from "../../Style/commonStyle";
import "./CustomDialogue.scss";

export default function CustomDialogue({
  open,
  handleClose,
  cancelText,
  confirmText,
  onSubmit,
  onCancel,
  className,
  children,
  modalWrapperClass,
  dialogueTitle,
}) {
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className={modalWrapperClass}
      sx={commonStyle.dialogueStyle}
    >
      <div className="modal-header-content">
        <div className="dialogueTitleStyle">{dialogueTitle}</div>

        <div className="col align-self-end text-end">
          <img
            src="/images/close.svg"
            className="close-icon cursor"
            alt="close"
            onClick={onCancel}
          />
        </div>
      </div>

      <div>{children}</div>

      <div className="container">
        <div
          className={
            className
              ? `row actions-button mt-4 ${className}`
              : "row actions-button mt-4"
          }
        >
          <div className="mb-3 col-md-6">
            <button
              className="cursor"
              onClick={onCancel}
              style={commonStyle.cancelBtn}
            >
              {cancelText}
            </button>
          </div>

          <div className="mb-3 col-md-6">
            <button
              onClick={onSubmit}
              className="cursor"
              style={commonStyle.confirmBtn}
              type="submit"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
