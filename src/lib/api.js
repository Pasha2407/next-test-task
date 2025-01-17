export async function fetchUsersList() {
    const res = await fetch("https://jsonplaceholder.org/users");
    return res.json();
}

export async function fetchUserDetails(id) {
    if (!id) return null;
    const res = await fetch(`https://jsonplaceholder.org/users/${id}`);
    return res.json();
}

export async function fetchPostsList() {
    const res = await fetch("https://jsonplaceholder.org/comments");
    return res.json();
}