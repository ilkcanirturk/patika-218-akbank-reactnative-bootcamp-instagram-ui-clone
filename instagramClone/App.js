import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './src/components/screens/Home';



const App = () => {

    const Stack = createNativeStackNavigator();

    const Tab = createBottomTabNavigator();

    const BottomTabScreen = () => {
        return(
            <Tab.Navigator
            // Daha sonrasında geliştirilebilmesi için tıkladıkça değişebilen bir  yapı mevcut.
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle:{
                    height: 50
                },
                // Alt Menüdeki ikonların tıklanınca değişmesi.
                tabBarIcon: ({focused, size, colour}) => {
                    let iconName;
                    ({ iconName, size, colour } = newFunction(route, focused, size, colour));


                    return <MaterialCommunityIcons name = {iconName} size={size} color={colour}/>
                }

            })}>
                {/* Alt Menüdeki sekme isimleri ve sayısı */}
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Search" component={Home}/>
                <Tab.Screen name="Reels" component={Home}/>
                <Tab.Screen name="Activity" component={Home}/>
                <Tab.Screen name="Profile" component={Home}/>
            </Tab.Navigator>
        )
    }


    return (

        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Bottom" component={BottomTabScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    
    );
};

//bu kısım daha sonra switch case ile yapılabilir.
function newFunction(route, focused, size, colour) {
    let iconName;
    if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
        size = focused ? size + 2 : size + 3;
        colour = focused ? "black" : "#222224";
    }
    else if (route.name === "Search") {
        iconName = "magnify";
        size = focused ? size + 2 : size + 3;
        colour = focused ? "black" : "#222224";
    }
    else if (route.name === "Reels") {
        iconName = focused ? "play-circle" : "play-circle-outline";
        size = focused ? size + 2 : size + 3;
        colour = focused ? "black" : "#222224";
    }
    else if (route.name === "Activity") {
        iconName = focused ? "shopping" : "shopping-outline";
        size = focused ? size + 2 : size + 3;
        colour = focused ? "black" : "#222224";
    }
    else if (route.name === "Profile") {
        iconName = focused ? "account-circle" : "account-circle-outline";
        size = focused ? size + 2 : size + 3;
        colour = focused ? "black" : "#222224";
    }
    return { iconName, size, colour };
}


export default App;
