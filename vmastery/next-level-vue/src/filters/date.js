export default value => {
    const date = new Date()
    return date.toLocaleString(['en-US'], {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
}