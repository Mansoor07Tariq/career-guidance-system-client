export const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
};

export const validateSignUpForm = (form: any, setErrors: (errors: any) => void): boolean => {
    let newErrors = { username: '', email: '', password: '', confirmPassword: '', dob: '' };
    let isValid = true;

    if (!form.username.trim()) {
        newErrors.username = 'Username is required';
        isValid = false;
    }

    if (!form.email.includes('@')) {
        newErrors.email = 'Invalid email format';
        isValid = false;
    }

    if (form.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
    }

    if (!form.dob) {
        newErrors.dob = 'Date of birth is required';
        isValid = false;
    } else if (calculateAge(form.dob) < 12) {
        newErrors.dob = 'You must be older than 12';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
};

export const validateLoginForm = (email: string, password: string, setErrors: (errors: any) => void): boolean => {
    let newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email.includes('@')) {
        newErrors.email = 'Invalid email format';
        isValid = false;
    }

    if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
};
