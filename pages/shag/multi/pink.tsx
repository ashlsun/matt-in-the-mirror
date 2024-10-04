import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>EXPERIMENTAL MULTI COLOR??</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/shag-multi-pink.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a color</h1>
                </div>
                <div className="flex items-center justify-center ">
                    <Link href="/shag/multi/red">
                        <div className="choice mx-5 transition">1 </div>
                    </Link>{" "}
                    <Link href="/shag/multi/blue">
                        <div className="choice mx-5 transition">2 </div>
                    </Link>{" "}
                    <Link href="/shag/multi/lime">
                        <div className="choice mx-5 transition">3 </div>
                    </Link>{" "}
                    <div className=" mx-5 transition">4 </div>
                </div>

                <div className="flex items-center justify-center mt-8 ">
                    {" "}
                    <Link href="/shag/navy">
                        <div className="choice mx-5 transition">
                            back to regular colors
                        </div>
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
