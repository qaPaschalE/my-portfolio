// src/utils/toast.utils.ts
import React from "react";
import { toast } from "react-toastify";

// This is a reusable component for the message content
const CustomMessage: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => (
  <div>
    <strong>{title}</strong>
    <p style={{ margin: 0, fontSize: "14px" }}>{message}</p>
  </div>
);

// This is the main reusable function for showing your custom success toast
export const showSuccessToast = (
  title: string,
  message: string,
  onCloseCallback?: () => void
) => {
  toast.success(<CustomMessage title={title} message={message} />, {
    // We keep the custom icon and onClose logic here
    icon: <i className="bi bi-envelope-check" style={{ color: "white" }} />,
    onClose: onCloseCallback,
  });
};

// You could also create other reusable toasts here, e.g., showErrorToast
