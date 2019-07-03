String.prototype.format = String.prototype.format ||
function () {
    "use strict";
    if (arguments.length) {
        var t = typeof arguments[0];
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];
    }

    var args = arguments;
    return this.toString().replace(/\{(.+?)\}/g, (match) => {
        var key = match.replace('{','').replace('}', '');
        var keyFormat = '';
        if(match.indexOf(':') > -1) {
            var formatParameters = key.split(':');
            key = formatParameters[0];
            keyFormat = formatParameters[1];
            if(formatParameters.length > 2) {
                keyFormat = formatParameters.slice(1).join(':');
            }
        }
    
        if(typeof args[key] === 'undefined') return match;
    
        var returnValue = args[key];
        if(!isNullOrEmpty(keyFormat)) {
            var str = new String(returnValue);
            if(keyFormat.startsWith('n')) {
                str = str.replace('.', ',');
                str = formatDecimals(str, keyFormat);
            } else if (!isNaN(keyFormat)) {
                str = str.replace('.', ',');
                str = formatDigits(str, keyFormat);
            } else if(isHourFormat(args[key], keyFormat)) {
                str = formatDateTime(args[key], keyFormat);
            }
    
            returnValue = str;
        }
    
        return returnValue;
    });
};

function formatDateTime(today, keyFormat){
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var month= today.getMonth();
    var y = today.getFullYear();
    var weekDay = convertDay(today.getDay());

    var ampm = h >= 12 ? 'pm' : 'am';
    var ampmh = h % 12;
    ampmh = ampmh ? ampmh : 12;

    m = "{0:00}".format(m);
    s = "{0:00}".format(s);
    h = "{0:00}".format(h);
    d = "{0:00}".format(d);
    month = "{0:00}".format(month);
    ampmh = "{0:00}".format(ampmh);

    return String(keyFormat)
        .replace('HH', h).replace('H', h.toString().substring(h.toString().length - 1))
        .replace('mm', m).replace('m', m.toString().substring(m.toString().length - 1))
        .replace('ss', s).replace('s', s.toString().substring(s.toString().length - 1))
        .replace('ddddd', weekDay).replace('dddd', weekDay.substring(0,4)).replace('ddd', weekDay.substring(0,3))
        .replace('dd', d).replace('d', d.toString().substring(d.toString().length - 1))
        .replace('MM', month).replace('M', month.toString().substring(month.toString().length - 1))
        .replace('yyyy', y).replace('yy', y.toString().substring(y.toString().length - 2))
        .replace('tt', ampm).replace('hh', ampmh).replace('h', ampmh.toString().substring(ampmh.toString().length - 1));
}

function formatDecimals(str, keyFormat) {
    if(str.indexOf(',') < 0) {
        str += ',';
    }

    var dotIndex = str.lastIndexOf(',');
    var currentDecimal = str.substr(dotIndex).replace(',','');
    var decimalDigitsCount = keyFormat.replace('n', '');
    var count = new Number(decimalDigitsCount) - currentDecimal.length;
    for (var i = 0; i < count; i++) {
        str += '0';
    }
    return str;
}

function formatDigits(str, keyFormat) {
    var decimalStr = "";
    if (str.lastIndexOf(',') > -1) {
        decimalStr = str.substr(str.lastIndexOf(','));
    }
    
    const strWithourDecimal = str.replace(decimalStr, '');
    const count = keyFormat.length - strWithourDecimal.length;
    var currentDigits = str;
    for (var i = 0; i < count; i++) {
        currentDigits = '0' + currentDigits;
    }
    
    return currentDigits;
}

function isHourFormat(object, keyFormat) {
    if (typeof object !== 'object') return false;
    if (keyFormat.indexOf('y') > -1) return true;
    if (keyFormat.indexOf('m') > -1) return true;
    if (keyFormat.indexOf('d') > -1) return true;
    if (keyFormat.indexOf('h') > -1) return true; 
    if (keyFormat.indexOf('M') > -1) return true;
    if (keyFormat.indexOf('s') > -1) return true;

    return false;
}

function convertDay(dayNumber){
    var result = 'Domingo';

    switch(dayNumber){
        case 0:
            result = 'Domingo';
            break;
        case 1:
            result = 'Segunda';
            break;
        case 2:
            result = 'Terça';
            break;
        case 3:
            result = 'Quarta';
            break;
        case 4:
            result = 'Quinta';
            break;
        case 5:
            result = 'Sexta';
            break;
        case 6:
            result = 'Sabado';
            break;
    }

    return result;
}

function isNullOrEmpty(variable) {
    return variable === undefined ||
        variable === null ||
        variable === "null" ||
        variable == "" ||
        variable == " " ||
        variable == "\n";
}