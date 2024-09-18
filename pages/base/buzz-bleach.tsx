import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>you look in the mirror </h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/buzzed-bleached.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a color (hint: they're all secondary)</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/bleach">
                        <div className="choice mx-5">bleach</div>
                    </Link>{" "}
                    <Link href="/base/dye">
                        <div className="choice mx-5">dye</div>
                    </Link>
                    <Link href="/base/grow">
                        <div className="choice mx-5">grow</div>
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
