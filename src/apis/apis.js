
export const getStatesinfo = async () => {
    try {
        const res = await fetch(`https://api.covidtracking.com/v1/states/daily.json`)
        const statesinfo = await res.json()
        return (statesinfo)
    } catch (error) {
        return (error)
    }
}

export const getSpacificState = async ({ statename }) => {
    try {
        const res = await fetch(`https://api.covidtracking.com/v1/states/${statename}/info.json`)
        const specific = await res.json()
        return (specific)
    } catch (error) {
        return (error)
    }
}

export const getCurrentValue = async () => {
    try {
        const res = await fetch(`https://api.covidtracking.com/v1/states/current.json`)
        const current = await res.json()
        return (current)
    } catch (error) {
        return (error)
    }
}

export const getHistoric = async ({ statename }) => {
    try {
        const res = await fetch(`https://api.covidtracking.com/v1/states/${statename}/daily.json`)
        const current = await res.json()
        return (current)
    } catch (error) {
        return (error)
    }
}





