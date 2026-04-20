// @ts-ignore
import React, { useState, useEffect } from 'react';
import {JournalEntry, Mood} from "./types";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import './App.css'
import {Button} from "react-bootstrap";

const App: React.FC = () => {
    const [entries, setEntries] = useState<JournalEntry[]>([])
    const [filter, setFilter] = useState<'all' | 'favorites'>('all')

    const handleAddEntry = (text: string, mood: Mood) => {
        const newEntry: JournalEntry = {
            id: crypto.randomUUID(),
            text,
            mood,
            isFavourite: false,
            createdAt: new Date(),
        }
        setEntries([newEntry, ...entries])
    }

    const handleToggleFavourite = (id: string) => {
        setEntries(prevEntries =>
            prevEntries.map(entry =>
                entry.id === id ? { ...entry, isFavourite: !entry.isFavourite } : entry
            )
        )
    }

    const filteredEntries = filter === 'favorites'
        ? entries.filter(e => e.isFavourite)
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
                {entries.length > 0 && (
                    <div className="filter-buttons">
                        <Button
                            variant="outline-primary"
                            onClick={() => setFilter('all')}
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        >
                            Kõik
                        </Button>
                        <Button
                            variant="outline-primary"
                            onClick={() => setFilter('favorites')}
                            className={`filter-btn ${filter === 'favorites' ? 'active' : ''}`}
                        >
                            Lemmikud
                        </Button>
                    </div>
                    )
                }

                <EntryList
                    entries={filteredEntries}
                    onToggleFavourite={handleToggleFavourite}
                    onDelete={handleDeleteEntry}
                />
            </div>

        </div>
    );
};

export default App;