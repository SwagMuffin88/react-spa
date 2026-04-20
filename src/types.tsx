export type Mood = 'Rõõmus' | 'Neutraalne' | 'Kurb' | 'Vihane';

export interface JournalEntry {
    id: string;
    text: string;
    mood: Mood;
    isFavourite: boolean;
    createdAt: Date;
}