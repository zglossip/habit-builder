import { saveFaillure, saveSuccess } from "@/util/counterAccessor"
import { DateTime } from "luxon"

export const INJECTION_KEY = Symbol()

interface ProgressInputService {
    onSuccess: () => void
    onFailure: () => void
}

export const useProgressInputService = (counterId: number, date: DateTime): ProgressInputService => {
    const onSuccess = () => {
        saveSuccess(counterId, date)
        .then(() => console.log("Saved successfully"))
        .catch(err => console.error(err))
    }

    const onFailure = () => {
        saveFaillure(counterId, date)
        .then(() => console.log("Saved successfully"))
        .catch(err => console.error(err))
    } 

    return {onSuccess, onFailure}
}