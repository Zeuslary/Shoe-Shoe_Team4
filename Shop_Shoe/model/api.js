
const addressHost = "https://vapi.vnappmob.com";
const provinceApi = addressHost + "/api/province";
const districtApi = addressHost + "/api/province/district";
const wardApi = addressHost + "/api/province/ward";

const useApi = (() => {

    async function getData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    const postData = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })

            return true;
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }
    }

    const deleteData = async(url, id) => {
        url = url + "/" + id;
        try {
            const response = await fetch(url, {
                method: "DELETE",
            });

            return true;
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }
    }


    return {
        getData,
        postData,
        deleteData
    }

})();

export default useApi;

export {
    addressHost,
    provinceApi,
    districtApi,
    wardApi
}
