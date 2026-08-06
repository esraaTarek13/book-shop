import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string().trim().email("Enter a valid email").required("Email is required"),
    message: Yup.string().trim().min(10, "Message is too short").required("Message is required"),
    subject: Yup.string().trim().required("Subject is required"),
});