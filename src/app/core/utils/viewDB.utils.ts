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
            return { name: element.name, opened: false, values: element.values.filter(getUnique).map(el => {
                return { name: el, checked: false };
            }) };
        });
    }
    return [];
};

export const createTableArray = function(data) {
    if(data) {
        let result = [];
        data.forEach((document, index) => {
            let row = document.map((element) => {
                return { value: element.value, isInvalid: false };
            });
            result.push({ id: index, values: row , status: false });
        });
        return result;
    }
    return [];
}

export const prepareToExcel = function(headers, fields) {
    if(headers && fields) {
        let headersArray = headers.map((element) => {
            return element.name;
        });
        let res = [];
        for(let i = 0; i < fields.length; i++) {
            let dict = {};
            for(let j = 0; j < headersArray.length; j++) {
                dict[headersArray[j]] = fields[i].values[j].value;
            }
            res.push(dict);
        }
        return res;
    }
    return [];
}