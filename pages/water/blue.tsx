import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="select-none">
                <div className="flex items-center justify-center mt-4">
                    <h1>seems like your hair is blue</h1>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-[500px] my-4"
                        src="/water-blue.JPG"
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>pick a color</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/water/blond">
                        <div className="choice mx-5">1</div>
                    </Link>{" "}
                    <div className=" mx-5">2</div>
                    <Link href="/water/green">
                        <div className="choice mx-5">3</div>
                    </Link>
                    <Link href="/water/lilac">
                        <div className="choice mx-5">4</div>
                    </Link>{" "}
                    <Link href="/water/sky">
                        <div className="choice mx-5">5</div>
                    </Link>
                    <Link href="/water/white">
                        <div className="choice mx-5">6</div>
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
