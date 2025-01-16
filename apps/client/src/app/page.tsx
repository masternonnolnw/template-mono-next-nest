'use client'

import Typography from '@/components/partial/Typography'
import { Button } from '@/components/ui/button'

import { tsr } from '@/service/api/ts-rest'

const LandingPage = () => {
    const { data } = tsr.getHello.useQuery({
        queryKey: ['test'],
    })
    return (
        <div className="flex h-fit w-full flex-col px-[190px] py-[50px]">
            <Typography variant="h1">herbarium</Typography>
            <Button>test</Button>
            <>{data?.body.message}</>
        </div>
    )
}

export default LandingPage
