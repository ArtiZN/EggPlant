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

export const _prepareForValidation = function(array) {
    let res = [];

    for(let i = 1, k = 2; i < array.length; i++, k++) {
        let dict = {};
        array[i].forEach((element, index) => {
            dict[array[0][index]] = element;
        });
        dict["[[Status]]"] = "OK";
        dict["[[Errors]]"] = "";
        dict["[SourceRowNumber]"] = k;
        res.push(dict);
    }

    return { data: res };
}

const move = function(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
}

export const _unshiftValidationArray = function(arr) {
    arr.forEach(document => {
        let statusIndex = document.findIndex((element) => {
            return element.name === "[[Status]]";
        });
        let errorIndex = document.findIndex((element) => {
            return element.name === "[[Errors]]";
        });
        if(statusIndex > -1 && errorIndex > -1) {
            move(document, statusIndex, 1);
            move(document, errorIndex, 2);
        }
    });
}