export const useUtils = () => {
    const greetings = (type, user) => {
        if (type === "welcome") {
            return `Benvenuto ${user}`
        } else {
            return `Arrivederci ${user}`
        }
    }

    return {
        greetings
    }
}