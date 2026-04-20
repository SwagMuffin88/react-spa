// @ts-ignore
import React, { useState, useEffect } from 'react';
import {JournalEntry, Mood} from "./types";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import './App.css'

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
        <div className="app-container">
            <div className="content-wrapper">
                <header className="header">
                    <h1>Minu päevik</h1>
                </header>

                <EntryForm onAdd={handleAddEntry} />

                <div className="section-title">
                    <h2>Minu mõtted</h2>
                </div>

                <EntryList
                    entries={entries}
                    onDelete={(id) => setEntries(entries.filter(e => e.id !== id))}
                />
            </div>
        </div>
    );
};

export default App;