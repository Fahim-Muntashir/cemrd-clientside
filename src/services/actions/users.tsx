'use server'
export async function getAllUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/all-users`, {
        cache: 'no-store',
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}


export async function updateUserRole(id: string, role: { role: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role),
    });
    const result = await response.json();
    return result;
}


export const getProfileInfo = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/profile/${id}`, {
        cache: 'no-store',
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json
        ();
    console.log(result);
    return result.data;
}



export const updateProfileInfo = async (formData: FormData, id: string) => {
    console.log(formData, "from af");
    console.log(formData, id);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/profile/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        body: formData,
    });

    const result = await response.json();
    return result;

}
