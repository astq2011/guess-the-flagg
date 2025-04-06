import CreateParty from "@/components/CreateParty";
import Link from "next/link";

export default function Home() {
  return <>
    <div className="flex items-center content-center">
      <Link href="/join">Join Party</Link>
      <Link href="/singel">Singel Player</Link>
      <CreateParty /> 
    </div>
  </>
}