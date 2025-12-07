import * as Yup from "yup";

export interface contactFormValues {
    firstname: string;
    lastname: string;
    email: string;
    phnumber: number;
    course:string;
    Message: string;
}

export const ContactFormSchema = Yup.object<contactFormValues>({
    firstname: Yup.string()
        .required("First name is required.")
        .min(3, "First name alteast 3 chatracters long."),

    email: Yup.string()
        .required("Email is required.")
        .email("Invalid email."),

    phnumber: Yup
        .number()
        .required('A phone number is required.')
        .typeError("Only numbers are allowed.")
        .positive("A phone number can't start with a minus.")
        .integer("A phone number can't include a decimal point.")
        .min(10,"Phone number must be of 10 digits."),

        course:Yup.string()
        .required("Please select the course.")
        
})