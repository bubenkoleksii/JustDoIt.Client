import {IJobResponse} from "../models/IJobResponse";
import {ICategoryResponse} from "../models/ICategoryResponse";

export const jobsSeed: IJobResponse[] = [
    {id: "AC2AFACB-B5F0-ED11-A49D-A39C55A1F694", isCompleted: false, name: "Заспівати", categoryName: "Сім'я", categoryId: "29755D94-A6DC-ED11-A496-C6D142DF2FCB", dueDate: new Date().toISOString(), dateDifferenceInMinutes: 234}
];

export const categoriesSeed: ICategoryResponse[] = [
    {id: "29755D94-A6DC-ED11-A496-C6D142DF2FCB", name: "Сім'я", countOfJobs: 1}
];