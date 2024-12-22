"use client"
import { GoogleLogin } from "@react-oauth/google";

export default function Googlelogin(){

    return(
        <>
        <div className="flex flex-col items-center">
          <GoogleLogin
            buttonText="Sign in with Google"
            // onSuccess={handleGoogleSuccess}
            onError={(error) => {
              console.error("Google Login Error:", error);
              alert("Failed to authenticate with Google. Please try again.");
            }}
          />
        </div>
        </>
    )
}