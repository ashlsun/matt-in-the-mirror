import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>woah. you look tough</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/buzzed-bleached-orange.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a color (hint: they're all secondary)</h1>
                </div>

                <div className="flex items-center justify-center">
                    <div className="mx-5">1</div>
                    <Link href="/buzz/green">
                        <div className="choice mx-5">2</div>
                    </Link>
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
