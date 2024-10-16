import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>its a little purple! </h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/base-indigo.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>what do you want to try next</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/red">
                        <div className="choice mx-5">red</div>
                    </Link>{" "}
                    <Link href="/base/bleach">
                        <div className="choice mx-5">bleach</div>
                    </Link>{" "}
                    <Link href="/base/buzz">
                        <div className="choice mx-5">buzz</div>
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
