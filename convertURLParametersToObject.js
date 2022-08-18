function convertURLParametersToObject(str){
    let parameters = str.split('?');
    parameters.shift();
    parameters = parameters.join('');
    let parameter = parameters.split('&');
    const result = {};
    parameter.forEach(element => {
        if(element){
            Object.assign(result, Object.fromEntries([element.split('=')]));
        }
    });
    return result;
}

module.exports = convertURLParametersToObject;