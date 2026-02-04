import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, School, Rocket } from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button } from '../../components/ui';
import { ProgressBar } from '../../components/ProgressBar';
import { styles } from './connectRymindr.styles';

type ConnectRymindrProps = NativeStackScreenProps<RootStackParamList, 'ConnectRymindr'>;

const MOCK_SCHOOL_ID = 'SCH-UK-84732';

const ConnectRymindr: React.FC<ConnectRymindrProps> = ({ navigation }) => {
    const [schoolId, setSchoolId] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    const handleSearch = () => {
        if (schoolId.trim().length > 0) {
            setIsSearched(true);
        } else {
            setIsSearched(false);
        }
    };

    const handleTextChange = (text: string) => {
        setSchoolId(text);
        if (text === '') {
            setIsSearched(false);
        }
    };

    const isFound = schoolId === MOCK_SCHOOL_ID;

    const handleContinue = () => {
        navigation.navigate('CreatePIN');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView contentContainerStyle={{ paddingBottom: 24 }} keyboardShouldPersistTaps="handled">
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <ArrowLeft size={20} color="#111827" />
                    </TouchableOpacity>
                    <ProgressBar currentStep={2} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Connect your school with Rymindr</Text>
                    <Text style={styles.subtitle}>
                        Enter the unique ID provided by Rymindr to establish a connection.
                    </Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="School ID"
                            placeholderTextColor="#9CA3AF"
                            value={schoolId}
                            onChangeText={handleTextChange}
                            onSubmitEditing={handleSearch}
                            autoCapitalize="characters"
                            returnKeyType="search"
                        />
                        <TouchableOpacity onPress={handleSearch}>
                            <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
                        </TouchableOpacity>
                    </View>

                    {isSearched && isFound && (
                        <>
                            <Text style={styles.foundHeader}>We found the following school matching the ID</Text>
                            <View style={styles.schoolCard}>
                                <View style={styles.schoolInfoRow}>
                                    <View style={styles.schoolIconContainer}>
                                        <School size={24} color="#FFFFFF" />
                                    </View>
                                    <View style={styles.schoolDetails}>
                                        <Text style={styles.schoolName}>St. George's School</Text>
                                        <Text style={styles.schoolAddress}>123 High Street, Manchester, M15 4AA</Text>
                                        <Text style={styles.schoolIdText}>School ID: {schoolId}</Text>
                                    </View>
                                </View>
                                <Button
                                    title="Confirm & continue"
                                    onPress={handleContinue}
                                    style={styles.confirmButton}
                                    textStyle={styles.confirmButtonText}
                                />
                            </View>
                        </>
                    )}

                    {isSearched && !isFound && (
                        <View style={styles.notFoundContainer}>
                            <Image
                                source={require('../../../assets/Images/case-file_8987583 2.png')}
                                style={styles.notFoundImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.notFoundTitle}>School not found</Text>
                            <Text style={styles.notFoundText}>
                                We couldn't find a school matching the ID you entered. Please check the School ID and try again.
                            </Text>
                        </View>
                    )}

                    <View style={styles.signupCard}>
                        <View style={styles.rocketIconContainer}>
                            <Rocket size={16} color="#EC4899" fill="#EC4899" />
                        </View>
                        <View style={styles.signupContent}>
                            <Text style={styles.signupText}>
                                You must be registered with Rymindr and have a Rymindr School ID to continue.
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.signupLink}>Signup to Rymindr</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ConnectRymindr;
