const ENDPOINT = "https://64948da90da866a95367f6c4.mockapi.io/posts";

class PostApi {
    get = async () => {
        try {
            const resp = await fetch(ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log("It's fetch!");
        }
    }

    post = async (post) => {
        try {
            const resp = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            });
            return await resp.json();
        } catch (e) {
            console.log("Do not POST it out", e);
        }
    }

    put = async (post) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            });
            return await resp.json();
        } catch (e) {
            console.log("Do not PUT out", e);
        }
    }

    delete = async (id) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${id}`, {
                method: "DELETE",
            });
            return await resp.json();
        } catch (e) {
            console.log("Delete? It's not gone.", e);
        }
    }
    
}

export const postApi = new PostApi();