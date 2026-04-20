// @ts-ignore
import React, { useState } from 'react';
import { Mood } from '../types';
import './EntryForm.css'

interface Props {
    onAdd: (text: string, mood: Mood) => void;
}

const EntryForm: React.FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [mood, setMood] = useState<Mood>('Neutraalne');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text, mood);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} className="entry-form">
            <div>
                <textarea
                    className="entry-text-area"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Millest sa täna mõtled?"/>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 bg-slate-100 p-4 rounded-lg text-center">
                        {(['Rõõmus', 'Neutraalne', 'Kurb', 'Vihane'] as Mood[]).map((m) => (
                            <button
                                key={m}
                                type="button"
                                onClick={() => setMood(m)}
                                className={`h-10 rounded-md flex items-center justify-center transition 
                                    ${mood === m ? 'bg-white shadow-sm scale-110' : 'hover:bg-white/50'}`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                    <button
                        type="submit" className="btn-primary"
                    >
                        Salvesta
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EntryForm;