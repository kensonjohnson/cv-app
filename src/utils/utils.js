export function restrictInput(event, maxRows, maxCols) {
    if (event.key === "Enter") {
        const content = event.target.value
        const rows = content.split("\n")
        if (rows.length + 1 > maxRows) {
            event.preventDefault()
        }
    }
    if (isCharacter(event.key)) {
        const content = event.target.value
        const rows = content.split("\n")
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].length + 1 >= maxCols) {
                const row = rows[i].slice(0, maxCols)
                rows[i] = row
            }
        }
        event.target.value = rows.join("\n")
    }
}

function isCharacter(string) {
    if (string.length > 1) return false
    const charCode = string.charCodeAt(0)
    if (charCode >= 32 && charCode <= 126) {
        return true
    }
    return false
}
