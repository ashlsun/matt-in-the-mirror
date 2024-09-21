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
                        src="/base.jpg"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>choose a color</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/blue">
                        <div className="choice mx-5">1</div>
                    </Link>{" "}
                    <Link href="/base/red">
                        <div className="choice mx-5">2</div>
                    </Link>
                    <Link href="/base/red">
                        <div className="choice mx-5">2</div>
                    </Link>
                </div>
                <br></br>

                <div className="flex items-center justify-center">
                    <h1>
                        (hint: for more colors, it might be beneficial to{" "}
                        <Link href="/base/bleach">
                            <span className="choice">bleach</span>
                        </Link>{" "}
                        your hair first)
                    </h1>
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
