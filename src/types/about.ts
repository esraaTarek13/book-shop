export interface ContactPayload {
    name: string;
    email: string;
    message: string;
    subject: string;
}

export interface Contact extends ContactPayload {
    id: number;
    created_at: string;
    updated_at: string;
}