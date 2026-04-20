// @ts-ignore
import React from 'react';
import { JournalEntry } from '../types';

interface Props {
    entries: JournalEntry[];
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
}

const EntryList: React.FC<Props> = ({ entries, onDelete, onToggleFavorite }) => {
    if (entries.length === 0) {
        return (
            <div className="text-center">
                <p className="font-medium">Siin on veel tühi</p>
            </div>
        );
    }

    return (
        <div className="entry-list">
            {entries.map((entry: { id: any; mood: any; text: any; createdAt: { toLocaleTimeString: () => any; }; }) => (
                <div key={entry.id} className="entry-card">
                    <div className="mood-name">{entry.mood}</div>
                    <div className="entry-text">
                        <p>{entry.text}</p>
                        <span className="entry-time">{entry.createdAt.toLocaleTimeString()}</span>
                    </div>
                    <button
                        onClick={() => onDelete(entry.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                    >
                        Kustuta
                    </button>
                </div>
            ))}
        </div>
    );
};

export default EntryList;