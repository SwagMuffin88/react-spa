// @ts-ignore
import React from 'react';
import { JournalEntry } from '../types';
import './EntryList.css'
import { Button } from 'react-bootstrap'
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa'

interface Props {
    entries: JournalEntry[];
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void
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
        <div className="entry-list-container">
            {entries.map((entry: { id: any; mood: any; createdAt: { toLocaleTimeString: (arg0: any[], arg1: { hour: string; minute: string; }) => any; }; text: any; isFavorite: any; }) => (
                <div key={entry.id} className="entry-card">
                    <div className="card-header-row">
                        <span className="mood-badge">{entry.mood} </span>
                        <span className="entry-time">
                            {entry.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>

                    <div className="card-body-content">
                        <p>{entry.text}</p>
                    </div>

                    <div className="card-footer-actions">
                        <Button
                            variant="link"
                            className={`action-btn fav-btn ${entry.isFavorite ? 'active' : ''}`}
                            onClick={() => onToggleFavorite(entry.id)}
                        >
                            {entry.isFavorite ? <FaHeart /> : <FaRegHeart />}
                        </Button>

                        <Button
                            variant="link"
                            className="action-btn delete-btn"
                            onClick={() => onDelete(entry.id)}
                        >
                            <FaTrash />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EntryList;