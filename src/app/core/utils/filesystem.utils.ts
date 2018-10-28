import { getUnique } from "./filter.utils";

// TODO: optimize these functions
export const _createTableArray = function(data) {
    return data.map((element, index) => {
        let rowData = element.map((element) => {
            return { value: element, isInvalid: false };
        });
        return { id: index, values: rowData, status: false}
    });
}

export const _createHeaderArray = function(data) {
    let result = data[0].map((element) => {
        return { name: element, opened: false, values: [] };
    });

    for(let i = 1; i < data.length; i++) {
        for(let j = 0; j < data[i].length; j++) {
            if(result[j] !== undefined ) {
                result[j].values.push(data[i][j]);
            }
        }
    }

    result.forEach(element => {
        element.values = element.values.filter(getUnique).map(el => {
            return { name: el, checked: false };
        });
    });

    return result;
}

export const _createFiltersArray = function(data) {
    let filterArray = {
        "sFields": []
    };

    filterArray.sFields = data.map((element) => {
        return { name: element, values: [] };
    });

    return filterArray;
}

export const _prepareForPOST = function(thArray, trArray) {
    return trArray.map((element) => {
        let document = {};
        element.values.forEach((item, index) => {
            document[thArray[index].name] = item.value;
        });
        return document;
    });
}