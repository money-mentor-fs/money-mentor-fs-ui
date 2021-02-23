import { Slide, toast } from "react-toastify";

const commonConfig = {
  transition: Slide,
  closeButton: true,
  autoClose: 5000,
  position: "top-center",
};

export function showToast(msg) {
  return toast(msg, {
    ...commonConfig,
  });
}

export function warningToast(msg) {
  return toast.error(msg, {
    ...commonConfig,
  });
}

export function infoToast(msg) {
  return toast.warn(msg, {
    ...commonConfig,
  });
}
