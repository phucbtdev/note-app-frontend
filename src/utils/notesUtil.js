import { GraphQLRequest } from "./request";

export const notesLoader = async ({ params } = { folderId }) => {
    const query = `
        query Folder($folderId: String) {
            folder(folderId: $folderId) {
                id
                name
                note {
                    id
                    content
                }
            }
        }
    `
    const data = await GraphQLRequest({
        query: query,
        variables: {
            folderId: params.folderId
        }
    })

    return data;
}