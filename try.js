const TableHeaders = [
    'title',
    'name',
    'images',
    'status',
    'action'
]

function generateName () {
    return TableHeaders.map(items => (items))
}

let headName = generateName()

console.log(headName)