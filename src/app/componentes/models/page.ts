export interface Page {
    content: any
    pageable: {
        pageNumber: number
        pageSize: number
        offset: number
        paged: boolean
        unpaged: boolean
    }
    totalPages: number
    totalElements: number
    last: boolean
    size: number
    number: number
    first: boolean
    numberOfElements: number
}
