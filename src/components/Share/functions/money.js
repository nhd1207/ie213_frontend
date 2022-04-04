// export default (value, show_unit='VNĐ')=>{
//     let unit = show_unit ? ' ' + show_unit : ''
//     return value !== null || value !== undefined ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + unit : value
// }
export default (input, show_unit)=>{//show_unit='VNĐ'
    let unit = show_unit ? ' ' + show_unit : ''
    let value = input + '';
    value = value.replace(/,/g, '')
    const reg = /^-?[0-9,]*(\.[0-9]*)?$/;
    if (!isNaN(value)&&reg.test(value)) {
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}${unit}`;
    }

    return input || ''
  }