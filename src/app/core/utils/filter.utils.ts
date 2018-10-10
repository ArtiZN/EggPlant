export const getUnique = function(value, index, self) { 
    return self.indexOf(value) === index;
}

export const remove = function(array, item) {
    let index = array.findIndex((element) => {
        return (element.name === item.name && 
                element.item.name === item.item.name &&
                element.item.checked === item.item.checked); 
    });
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}