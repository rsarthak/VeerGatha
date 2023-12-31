import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { React, useState } from "react";
const api = "";
const Login = () => {
    const [formData, setFormData] = useState({});
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);
            const response = await axios.post(api + "login/viewer/", formData);

            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="relative h-screen w-screen lg:w-auto flex justify-center items-center bg-cover">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg" />
            <Card
                color="transparent"
                shadow={false}
                className="relative z-10 w-80 max-w-screen-lg sm:w-96 text-center"
            >
                <Typography variant="h1" color="white">
                    Login
                </Typography>
                <Typography
                    color="white"
                    className="text-[0.9rem] mt-1 font-normal "
                >
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2" onSubmit={handleFormSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Email" color="white" />
                        <Input
                            type="password"
                            size="lg"
                            label="Password"
                            color="white"
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="white"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button
                        className="mt-6"
                        fullWidth
                        color="white"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Login;
