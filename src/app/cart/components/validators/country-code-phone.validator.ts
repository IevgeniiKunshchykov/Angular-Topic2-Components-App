import { AbstractControl, ValidatorFn } from '@angular/forms';

export function checkPhoneCountryCode(
    c: AbstractControl,
    code: string
): { [key: string]: boolean } | null {
    if (
        c.value !== undefined && !c.value.toString().startsWith(code)
    ) {
        return {
            wrongPhoneCountryCode: true
        };
    }
    return null;
}

export class CustomValidators {
    static phoneCountryCode(code: string): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            return checkPhoneCountryCode(c, code);
        };
    }
}
