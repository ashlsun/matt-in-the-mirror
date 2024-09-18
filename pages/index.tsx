import Link from "next/link";
import { useState } from "react";

export default function Index() {
    const [showPast, setShowPast] = useState(false);
    return (
        <>
            <div className="select-none p-5">
                <div className="flex items-center justify-center mt-4">
                    <h1>you look in the mirror </h1>
                </div>
                <div className="flex items-center justify-center opacity-40">
                    hint: click on the picture and hold to reminisce
                </div>

                <div className="flex items-center justify-center">
                    <img
                        onMouseDown={() => setShowPast(true)}
                        onMouseUp={() => setShowPast(false)}
                        className="w-[500px] my-4 cursor-pointer"
                        src={showPast ? "/past.jpg" : "/base.jpg"}
                        alt="Matt in the mirror"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <h1>what do you want to do?</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Link href="/base/bleach">
                        <div className="choice mx-5">bleach</div>
                    </Link>{" "}
                    <Link href="/buzz/">
                        <div className="choice mx-5">buzz</div>
                    </Link>
                    <Link href="/base/dye">
                        <div className="choice mx-5">dye</div>
                    </Link>
                </div>
            </div>
        </>
    );
}
