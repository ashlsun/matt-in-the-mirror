import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>it's yellow!</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/base-bleached-yellow-roots.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>change the color</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/base/bleach2-neon-green">
                        <div className="choice mx-5">1</div>
                    </Link>
                    <Link href="/base/bleach2-neon-orange">
                        <div className="choice mx-5">2</div>
                    </Link>
                    <div className="mx-5">3</div>
                </div>
                <br></br>
                <div className="flex items-center justify-center">
                    <h1>or</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/base/bleach2">
                        <div className="choice mx-5">go back to blond</div>
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
