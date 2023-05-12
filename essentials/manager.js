export const clientOnly = (callback) => {
    if (typeof window !== 'undefined') {
        return callback()
    }
    return null
}