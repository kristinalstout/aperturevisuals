import {createClient} from "@sanity/client"
import createImageUrlBuilder from "@sanity/image-url"

const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: "2024-06-15"
})

export default client

// export const urlFor = (source:any) =>
//     createImageUrlBuilder(config).image(source)

const builder = imageUrlBuilder(client)

export const urlFor =(source) =>{
  return builder.image(source)
}
