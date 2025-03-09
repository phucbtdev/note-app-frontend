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

    const res = await fetch('http://localhost:4000/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: {
                folderId: params.folderId
            }
        }),
    })

    const { data } = await res.json();
    return data;
}