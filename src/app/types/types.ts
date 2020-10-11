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

export type JobItem = {
    position: string,
    startDate: string,
    endDate?: string,
    bullets: string[]
}

export type WorkItem = {
    employer: string,
    jobs: JobItem[]
}