import { GraphQLRequest } from "./request";

export const noteLoader = async ({ params: { noteId } }) => {
    const query = `
        query Note($noteId: String) {
            note(noteId: $noteId) {
                content
                id
            }
        }
    `
    const data = await GraphQLRequest({
        query: query,
        variables: {
            noteId
        }
    })

    return data;
}

