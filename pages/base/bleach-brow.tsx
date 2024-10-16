import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>congrats u found BLEACHED EYEBROWS</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/base-bleached-roots-eyebrows.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>try a fun color while you're here</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/bleach-brow-purple">
                        <div className="choice mx-5">color 1</div>
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
