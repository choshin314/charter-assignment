export async function ajaxGet(url) {
    try {
        const res = await fetch(url)
        return res.json()
    } catch (err) {
        return { error: err.message }
    }
}