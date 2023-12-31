import { Typography } from "@material-tailwind/react";
import Signup from "../components/SignUpPg/signup";
import bg from "../assets/imgs/Group_237689.png"
import React from "react";

function SignupPg() {
    return (
        <> <img
        src={bg}
        alt="bg-img"
        className="absolute h-screen z-[-1] "
    />
    <div className="grid grid-cols-7">
        <div className="col-span-3">
            <Signup />
        </div>
        <div className="flex flex-col col-span-4 items-center ">
            <div className="text flex flex-1 justify-center items-center ">
                <Typography
                    variant="h3"
                    color="white"
                    className="p-8 flex justify-center items-center text-center font-poppins"
                >
                    EXPERIENCE WHEN SHARED BECOMES INSPIRATION
                </Typography>
                
            </div>
        </div>
    </div>

        </>
    );
}

export default SignupPg;