export const GraphQLRequest = async (payload, options = {}) => {
    const res = await fetch('http://localhost:4000', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            ...options
        },
        body: JSON.stringify(payload),
    })
    const { data } = await res.json();

    return data;
}
