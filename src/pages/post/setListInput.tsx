const ListInput = (getAllUsers: object) => {
    return [
        {
            name: 'user',
            label: 'Utilisateur ',
            isSelect: true,
            list: getAllUsers
        }
    ]
}

export default ListInput
