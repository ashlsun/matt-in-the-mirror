import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>salt and pepper</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/crop-pepper.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <h1>pick a color</h1>
                </div>
                <div className="flex items-center justify-center ">
                    <Link href="/cropped/yellow">
                        <div className="choice mx-5">1 </div>
                    </Link>
                    <Link href="/cropped/red">
                        <div className="choice mx-5">2 </div>
                    </Link>
                    <Link href="/cropped/blue">
                        <div className="choice mx-5">3 </div>
                    </Link>
                    <Link href="/cropped/purple">
                        <div className="choice mx-5">4 </div>
                    </Link>
                    <Link href="/cropped/dusty">
                        <div className="choice mx-5">5 </div>
                    </Link>
                    <Link href="/cropped/pink">
                        <div className="choice mx-5">6 </div>
                    </Link>
                    <Link href="/cropped/viridian">
                        <div className="choice mx-5">7 </div>
                    </Link>
                    <div className=" mx-5">8 </div>
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