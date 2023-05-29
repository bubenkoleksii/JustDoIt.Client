export interface CategoryResponse {
    id: string;
    name: string;
    countOfJobs: number;
}

export interface JobResponse {
    id: string;
    categoryId: string;
    name: string;
    categoryName: string;
    dueDate: string;
    isCompleted: boolean;
    dateDifferenceInMinutes: number;
}