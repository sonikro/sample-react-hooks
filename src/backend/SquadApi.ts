interface Squad {
    id: number
    name: string
}
export const fetchSquads = () => {
    return new Promise((resolve: (squads: Squad[]) => void, reject: any) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Squad A"},
                { id: 2, name: "Squad B"}
            ] as Squad[])
        }, 1500 )
    })
}