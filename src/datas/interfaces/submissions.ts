export interface ISubmission {
    _id: string;
    formId: string;
    createdAt: string;
    updatedAt: string;
    data: Record<string, any>;
}