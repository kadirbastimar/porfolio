export interface NavBottomLinksInterface {
    svgPath: string,
    link: string,
}

export interface ListItemInterface {
    title: string,
    desc?: string,
    logo: string,
    link?: string,
}

export interface TitledListItemInterface {
    text: string,
    arr: Array<ListItemInterface>
}

export interface ExperiencesListItemInterface {
    title: string,
    link? : string,
    date? : string,
    logo? : string,
    desc? : string,
    techStuffs: Array<string>
 }