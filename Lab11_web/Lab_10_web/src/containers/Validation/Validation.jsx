const checkStrings = (value) => {
    const regex = /\d/;

    return regex.test(value)
}

const checkEmail = (email) => {
    const regex = /[\w\.]+@[a-z]+\.[a-z]+/;

    return email.match(regex);
} 

export const validation = (values) => {
    const errors = [];

    if (checkStrings(values.firstName)) {
        errors.push("First name can't contain integers");
    }
    if (checkStrings(values.lastName)) {
        errors.push("Last name can't contain integers");
    }
    if (values.email !== "" && !checkEmail(values.email)) {
        errors.push("Wrong email");
    }
    return errors;
}