import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>you look in the mirror</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/water.JPG"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a color</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/buzz/bleach">
                        <div className="choice mx-5">1</div>
                    </Link>{" "}
                    <Link href="/buzz/dye">
                        <div className="choice mx-5">2</div>
                    </Link>
                    <Link href="/buzz/dye">
                        <div className="choice mx-5">3</div>
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
