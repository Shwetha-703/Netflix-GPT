

export const checkValidData = (email, password, name) =>{
    const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    const nameValidation = name===null? true : /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!emailValidation) return "Invalid Email Id";
    if(!passwordValidation) return "Invalid Password";
    if(!nameValidation) return "Invalid Name";
    return null;
}