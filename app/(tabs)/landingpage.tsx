// // import React, { useState } from 'react';
// // import { Image, StyleSheet, View, TouchableOpacity, Text, Animated, TextInput } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import * as WebBrowser from 'expo-web-browser';

// // WebBrowser.maybeCompleteAuthSession();

// // const LandingPage = () => {
// //   const [logoPosition] = useState(new Animated.Value(0));
// //   const [showLoginForm, setShowLoginForm] = useState(false);

// //   const handleLoginPress = () => {
// //     setShowLoginForm(true);
// //     animateLogo();
// //     // Logic for handling login button press
// //   };

// //   const handleBackPress = () => {
// //     animateLogoReverse();
// //     setShowLoginForm(false);
// //     // Logic for handling back arrow press
// //   };

// //   const handleRegisterPress = () => {
   
// //   };

// //   const handleGoogleSignInPress = () => {
   
// //   };

// //   const animateLogo = () => {
// //     Animated.timing(logoPosition, {
// //       toValue: -150, // Move logo up by 150 pixels
// //       duration: 1000, // Animation duration
// //       useNativeDriver: false, // Required for some animations
// //     }).start();
// //   };

// //   const animateLogoReverse = () => {
// //     Animated.timing(logoPosition, {
// //       toValue: 0, // Move logo back to its original position
// //       duration: 1000, // Animation duration
// //       useNativeDriver: false, // Required for some animations
// //     }).start();
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Animated.View style={[styles.logoContainer, { marginTop: logoPosition }]}>
// //         <Image
// //           source={require('../../assets/images/logo.png')}
// //           style={styles.logo}
// //         />
// //       </Animated.View>
// //       {!showLoginForm ? (
// //         <View style={styles.buttonContainer}>
// //           <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
// //             <Text style={styles.buttonText}>Login</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegisterPress}>
// //             <Text style={styles.buttonText}>Register</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={[styles.button, styles.googleSignInButton]} onPress={handleGoogleSignInPress}>
// //             <Image
// //               source={require('../../assets/images/google_logo.png')}
// //               style={styles.googleLogo}
// //             />
// //             <Text style={[styles.buttonText, styles.googleButtonText]}>Sign in with Google</Text>
// //           </TouchableOpacity>
// //         </View>
// //       ) : (
// //         <View style={styles.loginForm}>
// //           <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
// //             <Ionicons name="arrow-back" size={24} color="white" />
// //           </TouchableOpacity>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Username"
// //             placeholderTextColor="gray"
// //           />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Password"
// //             placeholderTextColor="gray"
// //             secureTextEntry
// //           />
// //           <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
// //             <Text style={styles.buttonText}>Login</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'black',
// //   },
// //   logoContainer: {
// //     marginBottom:0,
// //   },
// //   logo: {
// //     width: 350,
// //     height: 250,
// //     resizeMode: 'contain',
// //   },
// //   buttonContainer: {
// //     width: '80%',
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //     backgroundColor: '#2ca890',
// //     flexDirection: 'row',
// //   },
// //   buttonText: {
// //     fontSize: 18,
// //     color: 'white',
// //     marginLeft: 10,
// //   },
// //   googleLogo: {
// //     width: 30,
// //     height: 30,
// //     marginRight: 10,
// //   },
// //   googleButtonText: {
// //     flexDirection: 'row',
// //   },
// //   loginButton: {
// //     backgroundColor: '#2ca890',
// //   },
// //   registerButton: {
// //     backgroundColor: '#205c68',
// //   },
// //   googleSignInButton: {
// //     backgroundColor: '#2ca890',
// //   },
// //   loginForm: {
// //     width: '80%',
// //     alignItems: 'center',
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: 'white',
// //     marginBottom: 10,
// //     paddingHorizontal: 20,
// //   },
// //   backButton: {
// //     position: 'absolute',
// //     top: 20,
// //     left: 20,
// //     zIndex: 1,
// //   },
// // });

// // export default LandingPage;


// import React, { useState } from 'react';
// import { Image, StyleSheet, View, TouchableOpacity, Text, Animated, TextInput } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as WebBrowser from 'expo-web-browser';

// WebBrowser.maybeCompleteAuthSession();

// const LandingPage = () => {
//   const [logoPosition] = useState(new Animated.Value(0));
//   const [showLoginForm, setShowLoginForm] = useState(false);

//   const handleLoginPress = () => {
//     setShowLoginForm(true);
//     animateLogo();
//     // Logic for handling login button press
//   };

//   const handleBackPress = () => {
//     animateLogoReverse();
//     setShowLoginForm(false);
//     // Logic for handling back arrow press
//   };

//   const handleRegisterPress = () => {
   
//   };

//   const handleGoogleSignInPress = () => {
   
//   };


//   const animateLogo = () => {
//     Animated.timing(logoPosition, {
//       toValue: -150, // Move logo up by 150 pixels
//       duration: 1000, // Animation duration
//       useNativeDriver: false, // Required for some animations
//     }).start();
//   };

//   const animateLogoReverse = () => {
//     Animated.timing(logoPosition, {
//       toValue: 0, // Move logo back to its original position
//       duration: 1000, // Animation duration
//       useNativeDriver: false, // Required for some animations
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
//             <Ionicons name="arrow-back" size={24} color="white" />
//           </TouchableOpacity>
//       <Animated.View style={[styles.logoContainer, { marginTop: logoPosition }]}>
//         <Image
//           source={require('../../assets/images/logo.png')}
//           style={styles.logo}
//         />
//       </Animated.View>
//       {!showLoginForm ? (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegisterPress}>
//             <Text style={styles.buttonText}>Register</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.button, styles.googleSignInButton]} onPress={handleGoogleSignInPress}>
//             <Image
//               source={require('../../assets/images/google_logo.png')}
//               style={styles.googleLogo}
//             />
//             <Text style={[styles.buttonText, styles.googleButtonText]}>Sign in with Google</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.loginForm}>
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             placeholderTextColor="gray"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="gray"
//             secureTextEntry
//           />
//           <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   logoContainer: {
//     marginBottom: 50,
//   },
//   logo: {
//     width: 350,
//     height: 250,
//     resizeMode: 'contain',
//   },
//   buttonContainer: {
//     width: '80%',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: '#2ca890',
//     flexDirection: 'row',
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     marginLeft: 10,
//   },
//   googleLogo: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   googleButtonText: {
//     flexDirection: 'row',
//   },
//   loginButton: {
//     backgroundColor: '#2ca890',
//   },
//   registerButton: {
//     backgroundColor: '#205c68',
//   },
//   googleSignInButton: {
//     backgroundColor: '#2ca890',
//   },
//   loginForm: {
//     width: '80%',
//     alignItems: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'white',
//     marginBottom: 10,
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 60,
//     left: 20,
//     zIndex: 1,
//   },
// });

// export default LandingPage;



import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Animated, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const LandingPage = () => {
  const [logoPosition] = useState(new Animated.Value(0));
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginPress = () => {
    setShowLoginForm(true);
    animateLogo();
  };

  const handleBackPress = () => {
    animateLogoReverse();
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleRegisterPress = () => {
    setShowRegisterForm(true);
    animateRegisterButton();
  };

  const handleGoogleSignInPress = () => {
    // Logic for handling Google sign-in
  };

  const animateLogo = () => {
    Animated.timing(logoPosition, {
      toValue: -150, // Move logo up by 150 pixels
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animateLogoReverse = () => {
    Animated.timing(logoPosition, {
      toValue: 0, // Move logo back to its original position
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animateRegisterButton = () => {
    // Animation for register button
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Animated.View style={[styles.logoContainer, { marginTop: logoPosition }]}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </Animated.View>
        {!showLoginForm && !showRegisterForm ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegisterPress}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.googleSignInButton]} onPress={handleGoogleSignInPress}>
              <Image
                source={require('../../assets/images/google_logo.png')}
                style={styles.googleLogo}
              />
              <Text style={[styles.buttonText, styles.googleButtonText]}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.loginForm}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              keyboardType="default"
            />
            {showRegisterForm && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="gray"
                  keyboardType="default"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="gray"
                  keyboardType="email-address"
                />
                {/* Add more input fields for registration */}
              </>
            )}
            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logoContainer: {
    marginBottom: 50,
  },
  logo: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#2ca890',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  googleLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleButtonText: {
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: '#2ca890',
  },
  registerButton: {
    backgroundColor: '#205c68',
  },
  googleSignInButton: {
    backgroundColor: '#2ca890',
  },
  loginForm: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
});

export default LandingPage;
