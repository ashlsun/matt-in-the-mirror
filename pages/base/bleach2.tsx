import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>
                        omg last year when i was making this i wrote "looks
                        kinda ken!"{" "}
                    </h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/base-bleached-roots.JPG"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>change the style (subtle)</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/bleach">
                        <div className="choice mx-5">style 1</div>
                    </Link>{" "}
                    <Link href="/base/bleach2">
                        <div className="choice mx-5">style 2</div>
                    </Link>
                </div>
                <br></br>

                <div className="flex items-center justify-center">
                    <h1>change the color</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/base/bleach2-neon-green">
                        <div className="choice mx-5">1</div>
                    </Link>{" "}
                    <Link href="/base/bleach2-neon-orange">
                        <div className="choice mx-5">2</div>
                    </Link>
                    <Link href="/base/bleach2-yellow">
                        <div className="choice mx-5">3</div>
                    </Link>
                </div>
                <br></br>
                <div className="flex items-center justify-center">
                    <h1>mystery option</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/base/bleach-brow">
                        <div className="choice mx-5">i'm feeling lucky</div>
                    </Link>{" "}
                </div>
                <br></br>

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
