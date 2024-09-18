import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>a little wavy</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/wavy-blond.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a random color</h1>
                </div>
                <div className="flex items-center justify-center ">
                    <Link href="/wavy/blond">
                        <div className="choice mx-5 transition">1</div>
                    </Link>{" "}
                    <Link href="/wavy/blue">
                        <div className="choice mx-5 transition">2 </div>
                    </Link>{" "}
                    <Link href="/wavy/brown">
                        <div className="choice mx-5 transition">3 </div>
                    </Link>{" "}
                    <Link href="/wavy/pink">
                        <div className="choice mx-5 transition">4 </div>
                    </Link>{" "}
                    <Link href="/wavy/purple">
                        <div className="choice mx-5 transition">5 </div>
                    </Link>{" "}
                    <Link href="/wavy/red">
                        <div className="choice mx-5 transition">6 </div>
                    </Link>{" "}
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
