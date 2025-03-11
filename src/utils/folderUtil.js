import { GraphQLRequest } from "./request";

export const folderLoader = async () => {
    const query = `
        query Folders {
            folders {
                id
                name
                createdAt
            }
        } 
    `
    const data = await GraphQLRequest({
        query: query
    })
    return data;
}