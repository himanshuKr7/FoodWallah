import React, { useState, useRef } from "react";
import { checkvalidate } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errormessage, setErrormessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const navigate = useNavigate();

	const handlebuttonclick = (event) => {
		event.preventDefault();

		const nameValue = name.current ? name.current.value : "";
		const emailValue = email.current ? email.current.value : "";
		const passwordValue = password.current ? password.current.value : "";

		const message = checkvalidate(
			!isSignInForm,
			nameValue,
			emailValue,
			passwordValue
		);
		setErrormessage(message);

		if (message === null) {
			setIsLoading(true);
			if (!isSignInForm) {
				createUserWithEmailAndPassword(auth, emailValue, passwordValue)
					.then((userCredential) => {
						updateProfile(auth.currentUser, {
							displayName: nameValue,
						})
							.then(() => {
								const { uid, email, displayName } = auth.currentUser;
								dispatch(adduser({ uid, email, displayName }));
								toast.success("Signed up successfully!");
								setTimeout(() => {
									setIsLoading(false);
									navigate("/");
								}, 2000);
							})
							.catch((error) => {
								setIsLoading(false);
								setErrormessage(error.message);
							});
					})
					.catch((error) => {
						setIsLoading(false);
						setErrormessage(error.message);
					});
			} else {
				signInWithEmailAndPassword(auth, emailValue, passwordValue)
					.then((userCredential) => {
						dispatch(
							adduser({
								uid: userCredential.user.uid,
								email: userCredential.user.email,
								displayName: userCredential.user.displayName,
							})
						);
						toast.success("Logged in successfully!");
						setTimeout(() => {
							setIsLoading(false);
							navigate("/");
						}, 2000);
					})
					.catch((error) => {
						setIsLoading(false);
						setErrormessage(error.message);
					});
			}
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<form className="w-full md:w-4/12 absolute p-12 bg-[smokewhite] mx-auto right-0 left-0 rounded">
				<h1 className="font-bold text-3xl py-4 text-orange-500">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Enter Your Name"
						className="p-3 my-4 w-full bg-orange-200 rounded"
					/>
				)}
				<input
					type="text"
					ref={email}
					placeholder="Enter Your Email"
					className="p-3 my-3 bg-orange-200 w-full rounded"
				/>
				<input
					type="password"
					ref={password}
					placeholder="Enter Password"
					className="p-3 my-3 w-full bg-orange-200 rounded"
				/>
				<p className="text-red-500 text-lg">{errormessage}</p>
				<button
					className="p-2 my-4 w-full rounded-md bg-orange-500 text-white font-bold"
					onClick={handlebuttonclick}
					disabled={isLoading}>
					{isLoading ? "Please wait..." : isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p
					className="py-4 cursor-pointer text-orange-400 underline"
					onClick={toggleSignInForm}>
					{isSignInForm
						? "Don't have account? Sign Up Now"
						: "Already User? Sign In Now."}
				</p>
			</form>
			{isLoading && (
				<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-75">
					<p className="text-orange-400 text-2xl font-bold drop-shadow-lg">
						Directing to Browse Page... Please wait!
					</p>
				</div>
			)}
		</div>
	);
};

export default Login;
