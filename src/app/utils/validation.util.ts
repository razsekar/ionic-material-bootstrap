import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as EmailValidator from 'email-validator';
import { trimString } from './trim.util';
// import * as mobileValidator from 'phone';
const arrDiff = (a, b) => {
  return a.filter(x => !b.includes(x));
};
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export class ValidationUtil {
  static fieldMatcher(field: string, errorKey: string) {
    return function(control: FormControl): { [s: string]: boolean } {
      if (!control.parent) return null;
      return control.parent.get(field).value === control.value
        ? null
        : { [errorKey]: true };
    };
  }

  // TODO: Can't we make this a decorator. Must look into this.
  static oneLowerCaseValidator(errorKey) {
    return function(control) {
      if (!control.value) return null;
      return /^.*[a-z]/.test(control.value) ? null : { [errorKey]: true };
    };
  }
  static oneUpperCaseValidator(errorKey) {
    return function(control) {
      if (!control.value) return null;
      return /^.*[A-Z]/.test(control.value) ? null : { [errorKey]: true };
    };
  }
  static oneNonAlphaValidator(errorKey) {
    return function(control) {
      if (!control.value) return null;
      return /^.*[^A-Za-z]/.test(control.value) ? null : { [errorKey]: true };
    };
  }

  static onlyNumbersValidator(errorKey) {
    return function(control) {
      if (!control.value) return null;
      return /^\d+$/.test(control.value) ? null : { [errorKey]: true };
    };
  }

  static cannotBeBlank(control) {
    if (control.value) {
      return String(trimSpaces(control.value)).length > 0 ? null : { blank: true };
    }
    return null;
  }

  static phoneNumberValidator(control) {
    // let phone = mobileValidator(control.value);
    // return (phone.length > 0) ? null : { 'invalidMobileNumber': true };
    if (!control.value) return null;
    return /^\d{10}$/.test(trimSpaces(control.value))
      ? null
      : { invalidMobileNumber: true };
  }

  static OTPValidator(control) {
    // let phone = mobileValidator(control.value);
    // return (phone.length > 0) ? null : { 'invalidMobileNumber': true };
    if (!control.value) return null;
    return /^\d{4}$/.test(trimSpaces(control.value)) ? null : { invalidOTPNumber: true };
  }

  static OTPValidatorV4(control) {
    // let phone = mobileValidator(control.value);
    // return (phone.length > 0) ? null : { 'invalidMobileNumber': true };
    if (!control.value) return null;
    return /^\d{6}$/.test(trimSpaces(control.value)) ? null : { invalidOTPNumber: true };
  }

  static onlyDecimalValidator() {
    return function(control) {
      if (!control.value) return null;
      return /^[+-]?([0-9]*[.])?[0-9]+$/.test(control.value) ? null : { decimal: true };
    };
  }

  static minFloatValue(val) {
    return function(control) {
      if (!control.value) return null;
      let s = /^[+-]?([0-9]*[.])?[0-9]+$/.exec(control.value);
      return !s || Number(s[0]) > val ? null : { minVal: { minVal: val } };
    };
  }

  static maxFloatValue(val, errorKey = null) {
    return function(control) {
      if (!control.value) return null;
      let s = /^[+-]?([0-9]*[.])?[0-9]+$/.exec(control.value);
      return !s || Number(s[0]) < val
        ? null
        : errorKey ? { [errorKey]: { maxVal: val } } : { maxVal: { maxVal: val } };
    };
  }

  static minValue(val) {
    return function(control) {
      if (!control.value) return null;
      let s = /^[+-]?[0-9]+$/.exec(control.value);
      return !s || Number(s[0]) > val ? null : { minVal: { minVal: val } };
    };
  }

  static maxValue(val) {
    return function(control) {
      if (!control.value) return null;
      let s = /^[+-]?[0-9]+$/.exec(control.value);
      return !s || Number(s[0]) < val ? null : { maxVal: { maxVal: val } };
    };
  }

  static emailValidator(control) {
    if (!control.value) return null;
    const emailInput = trimString(control.value);
    if (EmailValidator.validate(emailInput)) {
      if (/^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/.test(control.value)) {
        return null;
      } else {
        return { email: true };
      }
    }
    return { email: true };
  }

  static emailorMRnorMobileValidation(control) {
    const emailOrNumber = control.value;
    const cannotbeBlank = ValidationUtil.cannotBeBlank(control);
    if (cannotbeBlank) {
      return cannotbeBlank;
    }
    if (
      /^\d+$/.test(emailOrNumber) ||
      (emailOrNumber || '').trim().length === 0 ||
      !emailOrNumber
    ) {
      return Validators.maxLength(10);
    } else {
      return ValidationUtil.emailValidator(control);
    }
  }

  static onlyAlphabetsValidator(errorKey) {
    return function(control) {
      if (!control.value) return null;
      return /^[a-zA-Z][a-zA-Z ]*$/.test(control.value) ? null : { [errorKey]: true };
    };
  }

  static differentPassword(control) {
    if (!control.value) return null;
    return control.parent.get('old_password').value !== control.value
      ? null
      : { differentPassword: true };
  }

  static validateDependantFields = (arrFields: Array<any>) => (control: FormGroup) => {
    if (!control.parent) {
      return null;
    }
    const hasFieldControls = arrFields.every(field => {
      if (!control.parent.get(field)) {
        return false;
      }
      return true;
    });

    if (!hasFieldControls) return null;

    const results = arrFields.filter(field => {
      return control.parent.get(field).value ? field : control.parent.get(field).value;
    });
    if (results.length) {
      // reset other field validation error messages
      arrDiff(arrFields, results).forEach(field => {
        control.parent.get(field).setErrors(null);
        // control.parent.get(field).markAsTouched();
      });
    }
    return results.length ? null : { emailOrMobileRequired: true };
  };

  static onlyAlphaNumericValidator() {
    return function(control) {
      if (!control.value) return null;
      return /^[a-zA-Z0-9 ]*$/.test(control.value) ? null : { alphaNumeric: true };
    };
  }
}

const trimSpaces = str => {
  return str.replace(/\s{1,}/g, '');
};

export const renderFormErrors = (form: FormGroup) => {
  Object.keys(form.controls).forEach(field => {
    const formField = form.get(field);
    if (formField instanceof FormGroup) {
      renderFormErrors(formField);
    } else {
      form.get(field).markAsTouched();
    }
  });
};
