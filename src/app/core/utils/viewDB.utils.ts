import { getUnique } from './filter.utils';

// TODO: apply interfaces to such type of functions

export const createHeaderArray = function(data) {
    if(data && data.length > 0) {
        let result = data[0].map((item) => {
            return { name: item.name, values: [] };
        });

        data.forEach(document => {
            document.forEach((element, index, array) => {
                if(element.name === result[index].name) {
                    result[index].values.push(element.value);
                }
            });
        });

        return result.map((element) => {
            return { name: element.name, values: element.values.filter(getUnique) };
        });
    }
    return [];
};

export const createTableArray = function(data) {
    if(data) {
        let result = [];
        data.forEach((document, index) => {
            let row = document.map((element) => {
                return element.value;
            });
            result.push({ id: index, values: row });
        });
        return result;
    }
    return [];
}