import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Delete } from 'lucide-react-native';
import { NumberButton } from './NumberButton';

interface PasswordNumberPadProps {
    onNumberPress: (num: string) => void;
    onBackspace: () => void;
}

const lettersMap: Record<string, string> = {
    '2': 'A B C',
    '3': 'D E F',
    '4': 'G H I',
    '5': 'J K L',
    '6': 'M N O',
    '7': 'P Q R S',
    '8': 'T U V',
    '9': 'W X Y Z',
};

const layout = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'backspace'],
];

export const PasswordNumberPad: React.FC<PasswordNumberPadProps> = ({
    onNumberPress,
    onBackspace,
}) => {
    return (
        <View style={styles.container}>
            {layout.map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={styles.row}>
                    {row.map((value, colIndex) => {
                        if (value === '') {
                            return <View key={`empty-${rowIndex}-${colIndex}`} style={styles.empty} />;
                        }

                        if (value === 'backspace') {
                            return (
                                <NumberButton
                                    key={`backspace-${rowIndex}-${colIndex}`}
                                    onPress={onBackspace}
                                    style={[styles.button, styles.backspaceButton]}
                                >
                                    <Delete size={22} color="#000000" />
                                </NumberButton>
                            );
                        }

                        const letters = lettersMap[value];
                        return (
                            <NumberButton
                                key={`${value}-${rowIndex}-${colIndex}`}
                                number={value}
                                onPress={() => onNumberPress(value)}
                                style={styles.button}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.numberText}>{value}</Text>
                                {letters ? <Text style={styles.lettersText}>{letters}</Text> : null}
                            </NumberButton>
                        );
                    })}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D1D5DB',
        paddingTop: 8,
        paddingHorizontal: 6,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    button: {
        flex: 1,
        height: 48,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
        elevation: 2,
    },
    backspaceButton: {
        backgroundColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
    },
    empty: {
        flex: 1,
        marginHorizontal: 3,
        height: 48,
    },
    numberText: {
        fontSize: 24,
        fontWeight: '400',
        color: '#000000',
        lineHeight: 28,
    },
    lettersText: {
        fontSize: 9,
        fontWeight: '700',
        color: '#000000',
        marginTop: -2,
        letterSpacing: 1,
    },
});
