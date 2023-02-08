export class Subject {
    year: string;
    studysubjects: string[];
}

export class DegressProgram {
    topHeading: string;
    topSubheading: string;
    secondTopHeading: string;
    secondTopSubHeading: string;
    subjects: Subject[];
}

export class RootObjectDegress {
    degressProgram: DegressProgram[];
}
