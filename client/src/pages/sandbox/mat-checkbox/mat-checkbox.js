import './mat-checkbox.less';

export class MatCheckbox {
  checked = true;
  indeterminateChecked = null;

  products = [
    { id: 0, name: 'Motherboard' },
    { id: 1, name: 'CPU' },
    { id: 2, name: 'Memory' }
  ];

  selectedProducts = [];

  selectedProductsMatch = [
    { id: 1, name: 'CPU' },
    { id: 2, name: 'Memory' }
  ];

  productMatcher = (a, b) => a.id === b.id;
}

export class StringifyValueConverter {
  toView(value) {
    return JSON.stringify(value);
  }
}
