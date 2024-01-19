import {useRouter} from 'vue-router'
interface AddCounterButtonService {
    navigate: () => void;
}

export const INJECTION_KEY = Symbol();

export const useAddCounterButtonService = ():AddCounterButtonService => {
    const $router = useRouter()

    const navigate = () => {
        $router.push({
            name: 'CreateCounter'
        })
    }

    return {navigate}
}