import {createClient} from "@sanity/client"


export const client = createClient({
    projectId: 'tck4u1jv',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2024-06-15"
})