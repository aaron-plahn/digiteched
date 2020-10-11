export type NavbarItem = {
    name: string,
    display: string,
    routerLink: string
}

export type EducationItem = {
    school: string,
    program: string,
    acronym?: string,
    major?: string,
    minor?: string,
    startDate?: string,
    endDate?: string,
    bullets: string[]
}