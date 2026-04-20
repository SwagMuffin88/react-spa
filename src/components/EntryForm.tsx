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

                <div className="mood-section">
                    <p className="mood-label">Täna ma olin...</p>

                    <div className="form-footer">
                        <div className="footer-spacer"></div>

                        <div className="mood-selector-container">
                            {(['Rõõmus', 'Neutraalne', 'Kurb', 'Vihane'] as Mood[]).map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    onClick={() => setMood(m)}
                                    className={`mood-btn ${mood === m ? 'active' : ''}`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>

                        <div className="footer-actions">
                            <button type="submit" className="btn-primary">
                                Salvesta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EntryForm;