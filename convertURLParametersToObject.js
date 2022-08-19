function convertURLParametersToObject(str){
    let parameters = str.split('?');
    parameters.shift();
    parameters = parameters.join('');
    let parameter = parameters.split('&');
    const result = {};
    parameter.forEach(element => {
        if(element){
            let d = element.split('=');
            const obj = {[d.shift()]: d.join('')};
            Object.assign(result, obj);
        }
    });
    return result;
}

module.exports = convertURLParametersToObject;