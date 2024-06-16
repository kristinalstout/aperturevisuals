

export const fetchPictures = async() => {
    const res = await fetch(`${process.env.REACT_APP_SANITY_BASE_URL}/api/getPictures`)
}