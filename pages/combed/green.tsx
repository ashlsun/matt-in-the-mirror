import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>YOU LOOK SO KPOP !!</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/comb-green.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a random color</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/combed/bleach">
                        <div className="choice mx-5">1</div>
                    </Link>
                    <Link href="/combed/brown">
                        <div className="choice mx-5">2</div>
                    </Link>
                    <div className="mx-5">3</div>
                    <Link href="/combed/ocean">
                        <div className="choice mx-5">4</div>
                    </Link>
                    <Link href="/combed/olive">
                        <div className="choice mx-5">5</div>
                    </Link>
                    <Link href="/combed/peach">
                        <div className="choice mx-5">6</div>
                    </Link>
                    <Link href="/combed/red">
                        <div className="choice mx-5">7</div>
                    </Link>
                    <Link href="/combed/lavender">
                        <div className="choice mx-5">8</div>
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
