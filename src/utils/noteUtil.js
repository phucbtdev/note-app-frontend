export const noteLoader = async ({ params: { noteId } }) => {
    const query = `
        query Note($noteId: String) {
            note(noteId: $noteId) {
                content
                id
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
                noteId
            }
        }),
    })

    const { data } = await res.json();
    return data;
}

