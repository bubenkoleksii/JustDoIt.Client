export interface IJobResponse {
    id: string;
    categoryId: string;
    name: string;
    categoryName: string;
    dueDate: string;
    isCompleted: boolean;
    dateDifferenceInMinutes: number;
}