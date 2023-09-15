import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>:000 looks kinda ken! </h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/base-bleached-roots.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>choose a style</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/bleach">
                        <div className="choice mx-5">style 1</div>
                    </Link>{" "}
                    <Link href="/base/bleach2">
                        <div className="choice mx-5">style 2</div>
                    </Link>
                </div>

                <div className="flex items-center justify-center mt-8 ">
                    <Link href="/">
                        <div className="choice mx-5 opacity-20 hover:opacity-70 transition">
                            return to start
                        </div>
                    </Link>{" "}
                </div>
            </div>
        </>
    );
}
