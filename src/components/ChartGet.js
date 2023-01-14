import DataService from "../services/DataService";

class DataGet {
    async getData() {
        await DataService.getAll()
            .then(response => {
                return [
                    ['Domínio', 'Acessos'],
                    [response.data[1].name, 312],
                    [response.data[2].name, 6456],
                    [response.data[3].name, 243],
                    [response.data[4].name, 6456],
                    [response.data[5].name, 87687]
                ];
            }).catch(e => {
                console.log(e);
            });
    };
}

export default new DataGet().getData();