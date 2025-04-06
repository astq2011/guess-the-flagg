export default async function Party({ params }: {
    params: Promise<{
        partyid: string
    }>
}) {

    const partyId = (await params).partyid

    return <>
        <div>{partyId}</div>
    </>

}