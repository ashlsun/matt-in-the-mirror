import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>a cropped look</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/crop.JPG"
                        alt="Matt in the mirror"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <h1>keep this style?</h1>
                </div>
                <div className="flex items-center justify-center ">
                    <Link href="/cropped/dye">
                        <div className="choice mx-5 transition">
                            yes keep going
                        </div>
                    </Link>{" "}
                    <Link href="/base/grow">
                        <div className="choice mx-5 transition">
                            no, go back to previous stage
                        </div>
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
