const ListInput = (getAllUsers: object, getAllTags: object) => {
    return [
        {
            name: 'user',
            label: 'Utilisateur ',
            isSelect: true,
            list: getAllUsers
        },
        {
            name: 'tag',
            label: 'Tags ',
            isAutoComplete: true,
            list: getAllTags
        }
    ]
}

export default ListInput
