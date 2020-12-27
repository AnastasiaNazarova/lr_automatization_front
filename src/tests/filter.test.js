const filter = require('../utils/filtering');

const products =[{nameProduct:'продукт', purchasePrice:100,number:2, markup:10 },
    {nameProduct:'еда', purchasePrice:23,number:3, markup:6},
    {nameProduct:'пища', purchasePrice:3,number:42, markup:1}];
const search1 = {nameProduct: 'про', purchasePrice: '', number: '',markup:''};
const res1 = [{nameProduct:'продукт', purchasePrice:100,number:2, markup:10 }];

const search2 = {nameProduct: '', purchasePrice: '3', number: '',markup:''};
const res2 = [{nameProduct:'еда', purchasePrice:23,number:3, markup:6}, {nameProduct:'пища', purchasePrice:3,number:42, markup:1}];

const search3 = {nameProduct: 'про', purchasePrice: '', number: '',markup:'2'};
const res3 = [];

test('filter test 1', () => {
    expect(filter(products, search1)).toEqual(res1);
});

test('filter test 2', () => {
    expect(filter(products, search2)).toEqual(res2);
});

test('filter test 3', () => {
    expect(filter(products, search3)).toEqual(res3);
});
