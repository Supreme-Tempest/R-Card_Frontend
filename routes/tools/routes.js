const Routes = {
    workshop: 'workshop/workshop', //get all, get all by municipio for param, post new, put update
    workshopPagine: 'workshop/workshopPagine', // get all pagine
    departments: 'workshop/departments', //get all
    municipios: 'workshop/municipios', //get all, get all by department for param
    rol: 'users/roles', //get all, post new, put update
    client: 'clients/clients', //get all, post new, put update
    clientState: 'clients/clientState',
    clientPage: 'clients/clientsPaginate', // get all paginate
    productPage: 'products/productsPaginate', // get all pagine
    userPage: 'users/usersPaginate', // get all pagine
    users: 'users/users', // get all pagine
    product: 'products/product', //get all, get all by type for param, post new, put update
    productType: 'products/type', //get all, get all by type for param, post new, put update
    productIdentificative: 'products/identificative', //get all, get all by type for param, post new, put update
    productIdentificativeType: 'products/identificative_type', //get all, post new, put update
}

module.exports = Routes;