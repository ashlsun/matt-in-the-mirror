import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>i thought that i was dreaming ...</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/buzzed-bleached-green.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a color (hint: they're all secondary)</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/buzz/orange">
                        <div className="choice mx-5">1</div>
                    </Link>{" "}
                    <div className="mx-5">2</div>
                    <Link href="/buzz/purple">
                        <div className="choice mx-5">3</div>
                    </Link>
                </div>

                <div className="flex items-center justify-center mt-8 ">
                    <Link href="/">
                        <div className="choice mx-5 opacity-30 hover:opacity-70 transition">
                            return to start
                        </div>
                    </Link>{" "}
                </div>
            </div>
        </>
    );
}
