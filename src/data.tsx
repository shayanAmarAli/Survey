export type OptionType = {
    value?: string;
    label?: string;
    opt_no?: string;
    src?: string;
};

export type QuestionType = {
    id: number;
    text: string;
    subtext: string;
    options: OptionType[];
};

export const form_data: QuestionType[] = [
    {
        id: 1,
        text: "Where do you live?",
        subtext: "Which part of this big, round Earth do you call home? ",
        options: [],
    },
    {
        id: 2,
        text: "What’s your gender?",
        subtext: "Please click on your gender.",
        options: [
            { value: "male", label: "Female", src: "/female.gif" },
            { value: "female", label: "Male", src: "/male.gif" },
        ],
    },
    {
        id: 3,
        text: "Which age group do you belong to?",
        subtext: "Could you let us in on which age group you're part of? You know, the chapter of life you're currently flipping through?",
        options: [
            { value: "Under 18 years old", opt_no: "A", label: "Under 18 years old" },
            { value: "18-24 years old", opt_no: "B", label: "18-24 years old" },
            { value: "25-34 years old", opt_no: "C", label: "25-34 years old" },
            { value: "35-44 years old", opt_no: "D", label: "35-44 years old" },
            { value: "45-54 years old", opt_no: "E", label: "45-54 years old" },
            { value: "55 years old and above", opt_no: "F", label: "55 years old and above" },
        ],
    },
    {
        id: 4,
        text: "What’s your highest level of education?",
        subtext: "Please select the right option",
        options: [
            { value: "high school", opt_no: "A", label: "High school" },
            { value: "bachelor's", opt_no: "B", label: "Bachelor's" },
            { value: "master's", opt_no: "C", label: "Master's" },
            { value: "doctorate", opt_no: "D", label: "Doctorate" },
        ],
    },
    {
        id: 5,
        text: "Are you currently employed?",
        subtext: "Please select the right option.",
        options: [
            { value: "yes", src: "/yes.gif", label: "yes" },
            { value: "no", src: "/no.gif", label: "no" },
        ],
    },
    {
        id: 6,
        text: "What’s your monthly household income?",
        subtext: "Please let us know about your income.",
        options: [],
    },
    {
        id: 7,
        text: "Do you think companies prefer to hire male employees over female employees?",
        subtext: "Please select the right option.",
        options: [
            { value: "yes", src: "/yes.gif", label: "yes" },
            { value: "no", src: "/no.gif", label: "no" },
        ],
    },
    {
        id: 8,
        text: "What are some of the biggest challenges you face in your career?",
        subtext: "Please select the right option.",
        options: [
            { value: "couldn't afford better education", opt_no: "A", label: "Couldn't afford better education" },
            { value: "gender bias and discrimination", opt_no: "B", label: "Gender bias and discrimination" },
            { value: "limited job opportunities", opt_no: "C", label: "Limited job opportunities" },
            { value: "limited career growth", opt_no: "D", label: "Limited career growth" },
            { value: "sacrificed career for family", opt_no: "E", label: "Sacrificed career for family" },
            { value: "None of the above", opt_no: "F", label: "None of the above" },
        ],
    },
    {
        id: 9,
        text: "What are some of the misconceptions about women in the workplace you have encountered?",
        subtext: "Please select the right option.",
        options: [
            { value: "women are inconsistent", opt_no: "A", label: "Women are inconsistent" },
            { value: "Women are not as capable as men in technical fields", opt_no: "B", label: "Women are not as capable as men in technical fields" },
            { value: "Women are not interested in continuing to work after marriage", opt_no: "C", label: "Women are not interested in continuing to work after marriage" },
            { value: "Women are not available to work long hours / after hours", opt_no: "D", label: "Women are not available to work long hours / after hours" },
            { value: "Women are not good team players", opt_no: "E", label: "Women are not good team players" },
            { value: "None of the above", opt_no: "F", label: "None of the above" },
        ],
    },
    {
        id: 10,
        text: "In your experience, did you ever face any of following?",
        subtext: "Please select the right option.",
        options: [
            { value: "Paid less than male colleagues", opt_no: "A", label: "Paid less than male colleagues" },
            { value: "Been harassed at work", opt_no: "B", label: "Been harassed at workfields" },
            { value: "Not promoted because of gender bias", opt_no: "C", label: "Not promoted because of gender biasmarriage" },
            { value: "I've never faced any of these issues", opt_no: "D", label: "I've never faced any of these issues" },
        ],
    },
    {
        id: 11,
        text: "Who do you think is more easy to work with?",
        subtext: "Please select the right option.",
        options: [
            { value: "man", src: "/male.gif", label: "Man" },
            { value: "women", src: "/female.gif", label: "Women" },
            { value: "both", src: "/matter.gif", label: "It doesn't matter" },
        ],
    },
    {
        id: 12,
        text: "Which do you prioritize more? Career or Family?",
        subtext: "Please select the right option",
        options: [
            { value: "career", src: "/career.gif", opt_no: "A", label: "Career" },
            { value: "family", src: "/family.gif", opt_no: "B", label: "Family" },
            { value: "i balance both", src: "/both.gif", opt_no: "C", label: "I balance both" },
        ],
    },
    {
        id: 13,
        text: "Do you struggle to get permission to work from your male family members or are they supportive of your career?",
        subtext: "Please select the right option",
        options: [
            { value: "yes, I'm not allowed to work", opt_no: "A", label: "Yes, I'm not allowed to work" },
            { value: "yes, but I work anyway", opt_no: "B", label: "Yes, but I work anyway" },
            { value: "no, males in my family are supportive", opt_no: "C", label: "No, males in my family are supportive" },
            { value: "no, males in my family encourage me to work", opt_no: "D", label: "No, males in my family encourage me to work" },
            { value: "other", opt_no: "D", label: "Other" },
        ],
    },
    {
        id: 14,
        text: "Did your parents support you with your education and career?",
        subtext: "Please select the right option",
        options: [
            { value: "yes, my parents focused on my education from childhood and", opt_no: "A", label: " support me in my career" },
            { value: "my parents focused on my academic qualification but do not encourage me in my career", opt_no: "B", label: "My parents focused on my academic qualification but do not encourage me in my career" },
            { value: "no, my parents never focused on my education or career", opt_no: "C", label: "No, my parents never focused on my education or career" },
            { value: "no, my parents do not allow me to work", opt_no: "D", label: "No, my parents do not allow me to work" },
        ],
    },
    {
        id: 15,
        text: "If you could only send your son or daughter to school, which would it be?",
        subtext: "Please select the right option",
        options: [
            { value: "son", opt_no: "A", label: "Son" },
            { value: "daughter", opt_no: "B", label: "Daughter" },
            { value: "whoever has more potential", opt_no: "C", label: "Whoever has more potential" },
        ],
    },
    {
        id: 16,
        text: "What's your email address?",
        subtext: "We'll use this for all future communications.",
        options: [],
    },
    {
        id: 17,
        text: "And finally, what's your phone number?",
        subtext: "We'll use this for all future communications.",
        options: [],
    },

];