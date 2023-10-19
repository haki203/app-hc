import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { auth } from "@react-native-firebase/auth";

export const _siginWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '796405893611-6ka7dp7je723lkc54igmi0u43suo76vk.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        })

        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        console.log(userInfo);
    } catch (error) {
        console.error('goooglein error');
    }
}