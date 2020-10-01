// Trim the multiple or trailing spaces for a given string
export const trimString = (str: any = ''): string =>
  !!str.length ? str.replace(/\s{2,}/g, ' ').trim() : str;

// Applies trimObjectSpaces to remove multiple or trailing spaces from the given array
export const trimArray = (arr: any[]): any => arr.map(e => trimObjectSpaces(e));

// Applies trimObjectSpaces to remove multiple or trailing spaces from a given object
export const trimObject = (obj: any): any => {
  return Object.keys(obj).reduce((acc, element) => {
    acc[element] = trimObjectSpaces(obj[element]);

    return acc;
  }, {});
};

export const trimObjectSpaces = (arrOrObj: any): any => {
  if (arrOrObj) {
    if (typeof arrOrObj === 'undefined' || typeof arrOrObj === 'function') {
      return arrOrObj;
    } else if (typeof arrOrObj === 'string' || arrOrObj instanceof String) {
      return trimString(arrOrObj);
    } else if (arrOrObj instanceof Array) {
      return trimArray(arrOrObj);
    } else if (arrOrObj !== null && typeof arrOrObj === 'object') {
      return trimObject(arrOrObj);
    } else if (typeof arrOrObj === 'boolean' || Number.isInteger(arrOrObj)) {
      // If the given object is boolean or number, then return it as is
      return arrOrObj;
    } else {
      return trimString(arrOrObj);
    }
  }

  return arrOrObj;
};

export const sanitizeUrlSegment = (urlSegment: string) => {
  if (!urlSegment) {
    return '';
  }

  return urlSegment
    .normalize()
    .replace(/[\u0300-\u036f]/g, '') // get rid of crazy characters if any like å,ç
    .replace(/\(.*\)/, ' ') // get rid of anything between "()" brackets
    .replace('and', ' ')
    .replace('&', '')
    .replace(/\s+/g, '-') // get rid of spaces
    .replace(/['/()]/g, '-') // get rid of characters: "'","/","(",")"
    .replace(/\./g, '') // get rid of dot characters
    .replace(/-+/g, '-') // get rid of repeating "-" characters because of above
    .replace(/-$/g, '') // need not end with a "-" character in the end
    .toLowerCase();
};

// transform text 'home care equipment' into 'Home Care Equipment'
export const capitalizeText = title =>
  title.split(' ').reduce((acc, str) => {
    return `${acc} ${str.charAt(0).toUpperCase()}${str
      .slice(1)
      .split('')
      .map(eachChar => eachChar.toLowerCase())
      .join('')}`;
  }, '');

// trim hypens from the given string 'home-care-equipment' into 'home care equipment'
export const trimHypensFromText = title => title.split('-').join(' ');

// product lisiting page
export const transformPageTitle = title => capitalizeText(trimHypensFromText(title));
