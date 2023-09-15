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
                        src="/base-red.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>what do you want to try next</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/blue">
                        <div className="choice mx-5">pinkish red</div>
                    </Link>{" "}
                    <Link href="/base/blue">
                        <div className="choice mx-5">orange red</div>
                    </Link>{" "}
                    <Link href="/base/blue">
                        <div className="choice mx-5">redder red!!</div>
                    </Link>{" "}
                    <Link href="/base/buzz">
                        <div className="choice mx-5">buzz</div>
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
