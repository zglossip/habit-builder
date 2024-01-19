import {useRouter} from 'vue-router'

interface CounterHeaderService {
    navigate: () => void;
}

export const INJECTION_KEY = Symbol()

export const useCounterHeaderService = (
    id: number
): CounterHeaderService => {
    const $router = useRouter()

    const navigate = () => {
        $router.push({
            name: 'ViewRecipe',
            params: {id}
        })
    }

    return {navigate}
}