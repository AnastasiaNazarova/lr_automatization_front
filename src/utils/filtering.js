function filter(products, searching) {
    return products.filter(item => {
        for(let prop in item) {
            if (searching[prop]) {
                const itemVal = `${item[prop]}`.toUpperCase();
                if (itemVal.indexOf(searching[prop].toUpperCase()) === -1) {
                    return false
                }
            }
        }
        return true
    })
}

module.exports = filter;