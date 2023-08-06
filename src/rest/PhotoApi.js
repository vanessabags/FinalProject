const PHOTO_ENDPOINT = "https://jsonplaceholder.typicode.com/albums/1/photos";

class PhotoApi {
    get = async () => {
        try {
            const resp = await fetch(PHOTO_ENDPOINT);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch (e) {
            console.log("fetch ain't fetching!");
        }
    }
}
export const photoApi = new PhotoApi();