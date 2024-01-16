import React, { useState } from 'react';
import FirstImage from '../../assets/1.png';
import SecondImage from '../../assets/2.png';
import ThirdImage from '../../assets/3.png';
import FourtImage from '../../assets/4.png';
import FifthImage from '../../assets/5.png';


interface SearchBoxProps {
    onAddTextPill: (text: { name: string; image?: string }) => void;
    textPills: { name: string; image?: string }[];
    handleRemoveTextPill: (index: number) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onAddTextPill, textPills, handleRemoveTextPill }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<{ name: string; image?: string }[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const users = [
        { name: 'John Doe', image: FirstImage },
        { name: 'Jane Doe', image: SecondImage },
        { name: 'Alice Smith', image: ThirdImage },
        { name: 'Bob Johnson', image: FourtImage },
        { name: 'Nick Giannopoulos', image: FifthImage },
        { name: 'donald duck', image: FirstImage },
        { name: 'jerry jems', image: SecondImage },
        { name: 'Ali blue', image: ThirdImage },
        { name: 'Tob Johnson', image: FourtImage },
        { name: 'Nick jones', image: FifthImage },
    ];

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
        setSuggestions(filteredUsers);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            if (suggestions.length > 0) {
                onAddTextPill(suggestions[0]);
            } else if (inputValue.trim() !== '') {
                onAddTextPill({ name: inputValue.trim() });
            }

            setInputValue('');
            setSuggestions([]);
        }else if (event.key === 'Backspace' && inputValue === '' && textPills.length > 0) {
            event.preventDefault();
            const lastTextPill = textPills[textPills.length - 1];
            handleRemoveTextPill(textPills.length - 1);
            setInputValue(lastTextPill.name);
        }
    };


    const handleSelectSuggestion = (user: { name: string; image?: string }) => {
        if (!textPills.some((pill) => {
            pill.name === user.name
            pill.image === user.image
        }
        )) {
            onAddTextPill(user);
        }

        setInputValue('');
        setSuggestions([]);
    };



    const handleInputFocus = () => {
        setSuggestions(users);
        setShow(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setShow(false);
        }, 500);
    };

    return (
        <div className="flex-grow relative">
            <input
                type="text"
                id="input"
                name="input"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="flex-1 mt-1 p-4 text-xl w-full focus:border-none focus:outline-none rounded-md"
                placeholder='Add New User'
            />
            {show && (
                <ul className="absolute bg-white border rounded-md mt-2">
                    {suggestions.map((user, index) => (
                        <li
                            key={index}
                            className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex"
                            onClick={() => handleSelectSuggestion(user)}
                        >
                            <img className="h-8 w-8 rounded-full" src={user.image} alt={user.name} title="User avatar" />
                            <span className="ml-2 cursor-default">{user.name}</span>
                        </li>
                    ))}
                </ul>
            )}


        </div>
    );
};

export default SearchBox;
