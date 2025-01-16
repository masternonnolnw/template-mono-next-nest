import { initTsrReactQuery } from '@ts-rest/react-query/v5'
import { helloContract } from 'api-contract'

const queryOptions = {
    baseUrl: process.env.BASE_API_URL ?? 'http://localhost:5000',
    baseHeaders: {
        'x-app-source': 'ts-rest',
        'x-access-token': () => {
            // todo: implement getAccessToken
            // getAccessToken()
            return 'token'
        },
    },
}

export const tsr = initTsrReactQuery(helloContract, queryOptions)
