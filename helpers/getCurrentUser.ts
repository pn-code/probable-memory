import axios from "axios";

export async function getCurrentUser() {
    try {
        const userData = await axios.get(
            `${process.env.HOST_URL}/api/users/me`
        );
        return userData.data.user;
    } catch (error) {
        console.error("No user found");
    }
}
