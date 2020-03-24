import { toast } from "react-toastify";

export const systemError = () => toast.error("An unexpected error occurred.");
export const formError = () => toast.error("Check all fields please.");
export const errorNotification = text => toast.error(text);
export const successNotification = text => toast.success(text);
