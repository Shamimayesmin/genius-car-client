import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)

            const currentUser = {
                email: user.email,
            };

            fetch("https://genius-car-server-rust.vercel.app/jwt", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);

						// local storage is the easiest but not the best place to store jwt token
						localStorage.setItem("genius-token", data.token);
						
					});
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <p className="text-center"><small>Social Login</small></p>
            <p className="text-center">
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;