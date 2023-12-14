// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { Icons } from '../assets/Icons';
// import HomeScreen from './screens/HomeScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useEffect } from 'react';
// import * as Animatable from 'react-native-animatable';

// const TabArr = [
//   { route: "HomeScreen", label:'HomeScreen', type: Icons.FontAwesome, icon:'user-circle-o', component: HomeScreen},
//   { route: "LoginScreen", label:'LoginScreen', type: Icons.FontAwesome, icon:'user-circle-o', component: HomeScreen},
//   { route: "CreateAccountScreen", label:'CreateAccountScreen', type: Icons.FontAwesome, icon:'user-circle-o', component: HomeScreen},
// ]

// //const Tab = createBottomTabNavigator();

// /*const animate1 = { 0: {scale:  .5, translateY:   7}, .92:{ translateY: -34 }, 1:{scale:1.2, translateY: -24}}
// const animate2 = { 0: {scale: 1.2, translateY: -24},   1:{scale: 1, translateY: 7 }}
// const circle1 = { 0: {scale: 0 }, 0.3: {scale: .9}, 0.5: {scale:.2}, 0.8:{scale: .7}, 1:{scale: 1}}
// const circle2 = {0: {scale:1}, 1:{scale:0}}*/

// const TabButton = (props) => {
//   const { item, onPress, accessibilityState } = props;
//   const focused = accessibilityState.selected;
//   const viewRef = useRef(null);
//   const circleRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     if (focused) {
//       viewRef.current.animate(animate1);
//       circleRef.current.animate(circle1);
//       textRef.current.transitionTo({ scale: 1 });
//     } else {
//       viewRef.current.animate(animate2);
//       circleRef.current.animate(circle2);
//       textRef.current.transitionTo({ scale: 0 });
//     }
//   }, [focused]);

//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
//       <Animatable.View ref={viewRef} duration={1000}>
//         <View style={styles.btn}>
//           <Animatable.View ref={circleRef} />
//           <Icon type={item.type} name={item.icon} color="white" /> {/* Utilisation du composant Icon */}
//         </View>
//         <Animatable.Text ref={textRef}>
//           {item.label}
//         </Animatable.Text>
//       </Animatable.View>
//     </TouchableOpacity>
//   );
// };

// export default function CustomNavBar() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarstyle: styles.tabBar
//       }}
//     >
//       {TabArr.map((item, index) => {
//         return (
//           <Tab.Screen key={index} name={item.route} component={item.component}
//             options={{
//               tabBarShowLabel: false,
//               tabBarButton: (props) => <TabButton {...props} item={item} />
//             }}
//           />
//         )
//       })}
//     </Tab.Navigator>
//   )
// }
// const styles = StyleSheet.create({
//   container:{

//   },
//   navBar: {
//     flexDirection: 'row', // Pour aligner les éléments horizontalement
//     justifyContent: 'space-around', // Pour répartir l'espace entre les éléments
//     height:"30%",
//     width:"90%",
//     alignItems: 'center', // Pour centrer verticalement les éléments
//     backgroundColor: '#5D3528',
//     alignSelf:'center',
//     borderRadius:32.5
//     //paddingVertical: 10,
//     //paddingHorizontal: 20,
//     //position: 'absolute', // Pour positionner la barre en bas de l'écran
//     //bottom: "50%",
//     //left: 0,
//     //right: 0,
//   },
//   navText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   tabBar:{

//   }
// });


