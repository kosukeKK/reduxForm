const required = (value: any) => (value ? undefined : 'Required');
const maxLength = (max: number) => (value: any) => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = (min: number) => (value: any) => value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength2 = minLength(2);
const number = (value: any) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = (min: number) => (value: any) => value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = (value: any) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const tooOld = (value: any) => value && value > 65 ? 'You might be too old for this' : undefined;
const aol = (value: any) => value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined;
const alphaNumeric = (value: any) => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;
const phoneNumber = (value: any) => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

const validation = {
    'required': required,
    'maxLength15': maxLength15,
    'minLength2': minLength2,
    'number': number,
    'minValue18': minValue18,
    'email': email,
    'tooOld': tooOld,
    'aol': aol,
    'alphaNumeric': alphaNumeric,
    'photoNumber': phoneNumber,
};

export default validation;
