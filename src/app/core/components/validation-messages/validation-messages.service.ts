import { Injectable } from '@angular/core';
@Injectable()
export class ValidationService {
    constructor() {

    }
    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any =  {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidMobile': 'Invalid Mobile no',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Max length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    static creditCardValidator(control: any) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB bbbbbbbbbbbbbbbbbb         bbbbbbbbbbbbbb
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    emailValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    mobileValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
            return null;
        } else {
            return { 'invalidMobile': true };
        }
    }

    static passwordValidator(control: any) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}