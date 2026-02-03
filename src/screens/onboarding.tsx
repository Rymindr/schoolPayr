import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ViewToken,
  Animated,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import styles from './onboarding.styles';

const { width } = Dimensions.get('window');

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

type OnboardingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

interface OnboardingProps {
  navigation: OnboardingNavigationProp;
}

const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    title: 'Accept school payments with tap to pay on phone!',
    description:
      'Easily accept in-person, contactless school payments using just your iPhone — no additional hardware required!',
    image: require('../../assets/Images/step1.png'),
  },
  {
    id: '2',
    title: 'Multiple users can collect payments seamlessly',
    description:
      'Empower your team to accept school payments effortlessly, with each user managing their own account.',
    image: require('../../assets/Images/step2.png'),
  },
  {
    id: '3',
    title: 'Track payments & manage inventory',
    description:
      'Keep your financial records organized and up-to-date while effortlessly managing your inventory.',
    image: require('../../assets/Images/step3.png'),
  },
];

const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const progressAnimations = useRef(
    onboardingData.map(() => new Animated.Value(0))
  ).current;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        const index = viewableItems[0].index;
        setCurrentIndex(index);

        progressAnimations.forEach((anim, i) => {
          if (i < index) {
            Animated.timing(anim, {
              toValue: 1,
              duration: 0,
              useNativeDriver: false,
            }).start();
          } else if (i === index) {
            Animated.timing(anim, {
              toValue: 1,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.timing(anim, {
              toValue: 0,
              duration: 0,
              useNativeDriver: false,
            }).start();
          }
        });
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      console.log('Onboarding completed');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const renderIcon = (image: any) => {
    return (
      <View style={styles.iconContainer}>
        <Image 
          source={image} 
          style={styles.onboardingImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View style={[styles.slide, { width }]}>
      {renderIcon(item.image)}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const renderProgressBars = () => (
    <View style={styles.progressBarsContainer}>
      {onboardingData.map((_, index) => {
        const progressWidth = progressAnimations[index].interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        });

        return (
          <View key={index} style={styles.progressBarSegment}>
            <Animated.View
              style={[
                styles.progressBarFill,
                { width: progressWidth },
              ]}
            />
          </View>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        {renderProgressBars()}

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Images/schoolPayr.png')} style={styles.logo} />
          <Text style={styles.logoText}>Welcome to SchoolPayr</Text>
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        bounces={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentIndex === onboardingData.length - 1 ? 'Get started' : 'Next'}
          </Text>
        </TouchableOpacity>

        {currentIndex === onboardingData.length - 1 && (
          <TouchableOpacity onPress={handleLogin} style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Already have an account? <Text style={styles.loginLink}>Login</Text>
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
