// TODO: find approach of applying this function in viewDB utils

export const getUnique = function(value, index, self) { 
    return self.indexOf(value) === index;
}