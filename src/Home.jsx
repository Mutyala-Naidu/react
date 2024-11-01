import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";

function Home(){

    return(
        <>
            <GoogleOAuthProvider clientId="528207825180-6pe7p6osmh34puf21h3ospti07h3mif2.apps.googleusercontent.com">
        <GoogleLoginComponent />
        </GoogleOAuthProvider>
            <h1>this is home page</h1>
        </>
    )
}
export default Home;