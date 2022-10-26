export interface Course {
    _id?:         string;
    title:       string;
    certificate: string;
    link:        string;
    repo:        string[];
    description: string;
    instructor:  string;
    __v?:         number;
}
