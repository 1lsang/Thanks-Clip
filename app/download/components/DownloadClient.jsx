"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getSearchParams } from "../../../utils/params"
import { Button } from "../../common/Button"
import { Confetti } from "./Confetti"
import { Download } from "./Download"
import { DownloadTitle } from "./DownloadTitle"
import { Envelop } from "./Envelope"

const DownloadClientPage = () => {
    const searchParams = useSearchParams()

    const { account, bucketName, from, region, renderId, to } = getSearchParams(
        {
            params: searchParams,
            search: [
                "to",
                "from",
                "bucketName",
                "renderId",
                "region",
                "account",
            ],
            type: "client",
        }
    )

    const isRenderValid = bucketName && renderId && region

    return (
        <>
            {isRenderValid && <Confetti />}

            <div className="h-full flex flex-col justify-between">
                <DownloadTitle from={from} />

                <div className="flex justify-center w-81 h-81 relative">
                    <Envelop />
                </div>

                <div className="mt-auto mb-5">
                    {isRenderValid ? (
                        <Download
                            to={to}
                            account={account}
                            region={region}
                            renderId={renderId}
                            bucketName={bucketName}
                        />
                    ) : (
                        <Button color="red" className="mb-5 z-50">
                            지금은 Clip을 열 수 없어요 😭
                        </Button>
                    )}

                    <Link href="/step/1">
                        <Button className="bg-inherit text-gray-800 border-gray-800 border-solid border z-50">
                            저도 만들어볼래요 🙌
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export { DownloadClientPage }
