export type FormFieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "password"
  | "textarea";

export interface FormFieldProps {
  name: string;
  label: string;
  type?: FormFieldType;
  placeholder?: string;
  className?: string;
  rows?: number;
  srOnly?: string;
  inputStyle?: string;
  disabled?: boolean;
  autoComplete?: string;
  htmlName?: string;
}