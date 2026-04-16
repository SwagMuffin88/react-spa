// @ts-ignore
import React, { useState } from 'react';
import { Mood } from '../types';

interface Props {
    onAdd: (text: string, mood: Mood) => void;
}

const EntryForm: React.FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [mood, setMood] = useState<Mood>('Neutraalne');


    return (
        <div>
            Hello
        </div>
    );
};

export default EntryForm;