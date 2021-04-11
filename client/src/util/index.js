export async function ajaxGet(url) {
    try {
        const res = await fetch(url)
        return res.json()
    } catch (err) {
        return { error: err.message }
    }
}

export function convertToQueryString(str) {
    return str.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +|_/g,'+');
}