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

    const res = await fetch('http://localhost:4000/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
        }),
    })

    const { data } = await res.json();
    return data;
}