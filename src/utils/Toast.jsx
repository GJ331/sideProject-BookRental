import { toast } from "react-toastify";

export const Toast = (message, type = "success", options = {}) => {
  const config = {
    position: "bottom-right",
    ...options,
  };

  switch (type) {
    case "success":
      toast.success(message, config);
      break;
    case "error":
      toast.error(message, config);
      break;
    case "info":
      toast.info(message, config);
      break;
    case "warning":
      toast.warn(message, config);
      break;
    default:
      toast(message, config);
      break;
  }
};
