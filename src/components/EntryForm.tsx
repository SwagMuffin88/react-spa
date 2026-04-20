// @ts-ignore
import React, { useState } from 'react';
import { Mood } from '../types';

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
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Millest sa täna mõtled?"/>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                        {(['Rõõmus', 'Neutraalne', 'Kurb', 'Vihane'] as Mood[]).map((m) => (
                            <button
                                key={m}
                                type="button"
                                onClick={() => setMood(m)}
                                className={`w-10 h-10 rounded-md flex items-center justify-center transition 
                                    ${mood === m ? 'bg-white shadow-sm scale-110' : 'hover:bg-white/50'}`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700
                            active:scale-95 transition transform"
                    >
                        Salvesta
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EntryForm;