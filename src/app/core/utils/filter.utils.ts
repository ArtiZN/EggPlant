export const getUnique = function(value, index, self) { 
    return self.indexOf(value) === index;
}

export const remove = function(array, item) {
    let index = array.findIndex((element) => {
        return element === item;
    });
    if (index > -1) {
        array.splice(index, 1);
    }
}

export const removeAll = function(array) {
    // array.slice(0, array.length);
    while(array.length > 0) {
        array.pop();
    }
}

export const addAll = function(array, addArray) {
    addArray.forEach(element => {
        if(!array.includes(element)) {
            array.push(element.name);
        }
    });
}

// TODO: apply this function with createHeaderArray function
export const createFilterArray = function(array) {
    let filterArray = {
        "sFields": []
    };
    if(array && array.length > 0) {
        filterArray["sFields"] = array[0].map((element) => {
            return { name: element.name , values: []}
        });
    }
    return filterArray;
}