// @ts-ignore
import React, { useState, useEffect } from 'react';
import {JournalEntry, Mood} from "./types";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";

const App: React.FC = () => {
    const [entries, setEntries] = useState<JournalEntry[]>([])
    const [filter, setFilter] = useState<'all' | 'favorites'>('all')

    const handleAddEntry = (text: string, mood: Mood) => {
        const newEntry: JournalEntry = {
            id: crypto.randomUUID(),
            text,
            mood,
            isFavorite: false,
            createdAt: new Date(),
        }
        setEntries([newEntry, ...entries])
    }

    const handleToggleFavourite = (id: string) => {
        setEntries(entries.map(e =>
            e.id === id ? { ...e, isFavorite: !e.isFavorite } : e
        ))
    }

    const filteredEntries = filter === 'favorites'
        ? entries.filter(e => e.isFavorite)
        : entries

    const handleDeleteEntry = (id: string) => {
        setEntries(entries.filter(e => e.id !== id));
    }

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
            <div className="max-w-2xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-indigo-600 mb-2">Minu päevik</h1>
                </header>

                <EntryForm onAdd={handleAddEntry} />

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl">Sinu sissekanded</h2>
                    <div className="space-x-2">
                        <button
                            onClick={() => setFilter('all')}
                        >Kõik</button>
                        <button
                            onClick={() => setFilter('favorites')}
                        >Lemmikud</button>
                    </div>
                </div>

                <EntryList
                    entries={filteredEntries}
                    onDelete={handleDeleteEntry}
                    onToggleFavorite={handleToggleFavourite}
                />
            </div>
        </div>
    );
};

export default App;