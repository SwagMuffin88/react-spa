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
        <div>
           Hello
        </div>
    );
};

export default EntryList;